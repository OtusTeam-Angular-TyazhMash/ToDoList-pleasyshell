import { Injectable } from '@angular/core';
import {
    TAddTaskModal, TStatus, TTask,
    TTaskListContentState, closeAddTaskModal, confirmEditTask,
    confirmSaveTask, openAddTaskModal, selectListOfTaskDescription,
    selectListOfTaskStatus, selectModalAddTaskState, selectTasks,
    selectTitleOfTask,
    statusReset,
} from 'src/app/module/content/backlog-content/store';
import { Observable, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { NoticeService } from '../notice/notice.service';
import * as uuid from "uuid";
import {
    AbstractControl,
    FormBuilder, FormControl,
    FormGroup, ValidationErrors, Validators
} from '@angular/forms';

@Injectable()

export class BacklogAddModalService {


    constructor(
        private store: Store<TTaskListContentState>,
        private notice: NoticeService,
        private fb: FormBuilder
    ) {
        this.modalAddTask$ = this.store.select(selectModalAddTaskState);

        this.titleOfTaskInit$ = this.store.select(selectTitleOfTask);
        this.listOfTaskStatusInit$ = this.store.select(selectListOfTaskStatus);
        this.textAreaOfTaskDescriptionInit$ = this.store.select(selectListOfTaskDescription);

        this.validAddTask = fb.group({

            TaskName: new FormControl('', Validators.required),
            Status: new FormControl('', [Validators.required, this.customTaskStatusValidator]),
            Description: new FormControl('')
        });

        this.modalAddTask$.subscribe((data: TAddTaskModal) => {

            const modalTask = data.ModalContent;

            this.validAddTask.patchValue({

                TaskName: modalTask.TaskName,
                Status: modalTask.TaskStatus,
                Description: modalTask.Description
            });
        });
    };


    private modalAddTask$: Observable<TAddTaskModal>;
    private validAddTask: FormGroup;

    private customTaskStatusValidator(control: AbstractControl): ValidationErrors | null {

        const taskStatusValue = control.value as TStatus;

        if (taskStatusValue.Id === 0) {

            return { 'invalidStatus': true };
        };

        return null;
    };


    public titleOfTaskInit$: Observable<string>;
    public listOfTaskStatusInit$: Observable<TStatus>;
    public textAreaOfTaskDescriptionInit$: Observable<string>;


    public getValidData(): FormGroup {

        return this.validAddTask;
    };


    public openAddTaskModal(item?: TTask) {

        if (!item) {

            this.store.dispatch(openAddTaskModal({ task: undefined }));
            return;
        };

        this.store.dispatch(openAddTaskModal({ task: item }));
    };

    public closeAddTaskModal() {

        this.store.dispatch(closeAddTaskModal());
    };


    public saveTask() {

        const notice = this.notice;

        this.store.select(selectTasks).pipe(
            take(1),
            map(tasks => {
                const maxId = tasks.reduce((result, task) => task.Id > result ? task.Id : result, 0);
                return maxId;
            })
        ).subscribe(maxId => {
            this.modalAddTask$.pipe(take(1)).subscribe((modalState: TAddTaskModal) => {

                const modalTask = modalState.ModalContent;

                if (modalTask) {

                    const generateJSONServerId = uuid.v4();

                    const _savedTask: TTask = {
                        ...modalTask,
                        Id: maxId + 1,
                        id: generateJSONServerId
                    };

                    this.store.dispatch(confirmSaveTask({ savedTask: _savedTask }));
                    notice.success('Добавлена задача: ', `${_savedTask.TaskName}`);
                };
            });
        });
    };

    public editTask() {

        const notice = this.notice;

        this.modalAddTask$.pipe(take(1)).subscribe((modalState: TAddTaskModal) => {

            const _editedTask = modalState.ModalContent;

            this.store.dispatch(confirmEditTask({ editedTask: _editedTask }));
            notice.edit('Редактирована задача: ', `${_editedTask.TaskName}`);
        });
    };

};
