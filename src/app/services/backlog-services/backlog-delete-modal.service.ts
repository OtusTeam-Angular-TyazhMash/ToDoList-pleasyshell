import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { TTask } from 'src/app/module/content-types';
import {
    TDeleteTaskModal, TTaskListContentState, closeDeleteTaskModal,
    confirmDeleteTaskModal, openDeleteTaskModal, removeShowCurrentTask,
    selectModalDeleteTaskState, updateTasks
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
            deleteTask = modalState.Content;

            if (deleteTask.id) {

                this.store.dispatch(confirmDeleteTaskModal({ taskId: deleteTask.id }));
                this.store.dispatch(updateTasks());
                this.store.dispatch(removeShowCurrentTask({ task: deleteTask }));

                notice.delete('Удалена задача: ', `${deleteTask.TaskName}`);
            };
        });
    };

};
