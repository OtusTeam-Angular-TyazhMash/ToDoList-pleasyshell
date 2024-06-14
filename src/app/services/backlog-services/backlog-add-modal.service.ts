import { Injectable } from '@angular/core';
import { TStatus, TTask } from 'src/app/module/content-types';
import {
    TAddTaskModal, TDeleteTaskModal, TTaskListContentState, closeAddTaskModal,
    confirmSaveTask, openAddTaskModal, selectListOfTaskDescription, selectListOfTaskStatus,
    selectModalAddTaskState, selectTasks, selectTitleOfTask, updateTasks,
} from 'src/app/module/content/backlog-content/store';
import { Observable, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { NoticeService } from '../notice/notice.service';

@Injectable()

export class BacklogAddModalService {


    constructor(
        private store: Store<TTaskListContentState>,
        private notice: NoticeService

    ) {
        this.modalAddTask$ = this.store.select(selectModalAddTaskState);

        this.titleOfTaskInit$ = this.store.select(selectTitleOfTask);
        this.listOfTaskStatusInit$ = this.store.select(selectListOfTaskStatus);
        this.textAreaOfTaskDescriptionInit$ = this.store.select(selectListOfTaskDescription);
    };


    private modalAddTask$: Observable<TAddTaskModal>;


    public titleOfTaskInit$: Observable<string>;
    public listOfTaskStatusInit$: Observable<TStatus>;
    public textAreaOfTaskDescriptionInit$: Observable<string>;


    public getAddedTask(): Observable<TDeleteTaskModal> {

        return this.modalAddTask$;
    };


    public openAddTaskModal() {

        this.store.dispatch(openAddTaskModal({ task: undefined }));
    };

    public closeAddTaskModal() {

        this.store.dispatch(closeAddTaskModal());
    };


    public saveTask() {

        const notice = this.notice;

        this.store.select(selectTasks).pipe(
            take(1),
            map(tasks => {
                const maxId = tasks.reduce((max, task) => task.Id > max ? task.Id : max, 0);
                return maxId;
            })
        ).subscribe(maxId => {
            this.modalAddTask$.pipe(take(1)).subscribe((modalState: TAddTaskModal) => {

                const modalTask = modalState.ModalContent;

                if (modalTask) {

                    const newTask: TTask = {
                        ...modalTask,
                        Id: maxId + 1
                    };

                    this.store.dispatch(confirmSaveTask({ task: newTask }));
                    this.store.dispatch(updateTasks());

                    notice.success('Добавлена задача: ', `${newTask.TaskName}`);
                };
            });
        });
    };

};
