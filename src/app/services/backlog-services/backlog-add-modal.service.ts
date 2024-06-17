import { Injectable } from '@angular/core';
import {
    TAddTaskModal, TDeleteTaskModal, TStatus,
    TTask, TTaskListContentState, closeAddTaskModal,
    confirmSaveTask, openAddTaskModal, selectListOfTaskDescription,
    selectListOfTaskStatus, selectModalAddTaskState, selectTasks,
    selectTitleOfTask,
} from 'src/app/module/content/backlog-content/store';
import { Observable, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { NoticeService } from '../notice/notice.service';
import * as uuid from "uuid";

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

                    const generateJSONId = uuid.v4()

                    const newTask: TTask = {
                        ...modalTask,
                        Id: maxId + 1,
                        id: generateJSONId
                    };

                    this.store.dispatch(confirmSaveTask({ task: newTask }));
                    notice.success('Добавлена задача: ', `${newTask.TaskName}`);
                };
            });
        });
    };

};
