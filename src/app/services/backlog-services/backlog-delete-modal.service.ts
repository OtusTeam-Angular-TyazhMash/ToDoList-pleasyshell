import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import {
    TDeleteTaskModal, TTask, TTaskListContentState,
    closeDeleteTaskModal, confirmDeleteTaskModal, openDeleteTaskModal,
    selectModalDeleteTaskState
} from 'src/app/module/content/backlog-content/store';
import { NoticeService } from '..';

@Injectable()

export class BacklogDeleteModalService {


    constructor(
        private store: Store<TTaskListContentState>,
        private notice: NoticeService
    ) {
        this.modalDeleteTask$ = this.store.select(selectModalDeleteTaskState);
    };


    private modalDeleteTask$: Observable<TDeleteTaskModal>;


    public getDeletedTask(): Observable<TDeleteTaskModal> {

        return this.modalDeleteTask$;
    };


    public openDeleteTaskModal(deletedTask: TTask) {

        this.store.dispatch(openDeleteTaskModal({ task: deletedTask }));
    };

    public closeDeleteTaskModal() {

        this.store.dispatch(closeDeleteTaskModal());
    };


    public deleteTask() {

        const notice = this.notice;
        let deleteTask: TTask;

        this.modalDeleteTask$.pipe(take(1)).subscribe((modalState: TDeleteTaskModal) => {
            deleteTask = modalState.ModalContent;

            if (deleteTask.id) {

                this.store.dispatch(confirmDeleteTaskModal({ task: deleteTask }));
                notice.delete('Удалена задача: ', `${deleteTask.TaskName}`);
            };
        });
    };

};
