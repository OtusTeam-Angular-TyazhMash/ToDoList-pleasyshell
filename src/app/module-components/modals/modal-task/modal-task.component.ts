import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    TAddTaskModal, TStatus, TTaskListContentState, checkAddTaskModal, selectModalAddTaskState,
    setFieldTaskDescription, setFieldTaskName, setFieldTaskStatus
} from 'src/app/module/content/backlog-content/store';
import { BacklogAddModalService, NoticeService } from 'src/app/services';
import { openList, openWindow } from 'src/utils/animations';

@Component({
    selector: 'modal-add-task',
    templateUrl: './modal-task.component.html',
    styleUrls: ['../modal-styles.component.scss',
        '../../styles/button-styles.scss'],
    animations: [openWindow, openList]
})

export class ModalTaskComponent {


    constructor(
        private store: Store<TTaskListContentState>,
        private backlogAddModalService: BacklogAddModalService,
        private notice: NoticeService
    ) {
        this.addTaskModalExist();

        this.titleOfTask = backlogAddModalService.titleOfTaskInit$;
        this.listOfTaskStatus = backlogAddModalService.listOfTaskStatusInit$;
        this.textAreaOfTaskDescription = backlogAddModalService.textAreaOfTaskDescriptionInit$;
    };


    private viewContent!: TAddTaskModal;
    private allStatuses: TStatus[] = [
        {
            Id: 1,
            Status: 'Не выполнена'
        },
        {
            Id: 2,
            Status: 'Выполнена'
        },
    ];


    protected titleOfTask: Observable<string>;
    protected listOfTaskStatus: Observable<TStatus>;
    protected textAreaOfTaskDescription: Observable<string>;


    private addTaskModalExist() {

        this.store.select(selectModalAddTaskState).subscribe(result => {

            this.viewContent = result;
        });
    };


    protected getModalViewContent(): TAddTaskModal {

        return this.viewContent;
    };

    protected getStatuses(): TStatus[] {

        return this.allStatuses;
    };


    protected onTitleOfTaskChange(_taskname: string) {

        this.store.dispatch(setFieldTaskName({ taskname: _taskname }));
    };

    protected onListOfTaskStatusChange(_status: TStatus) {

        this.store.dispatch(setFieldTaskStatus({ status: _status }));
    };

    protected onTextAreaTaskDescriptionChange(_description: string) {

        this.store.dispatch(setFieldTaskDescription({ description: _description }));
    };


    protected confirmSaveTask() {

        const validStatus = this.backlogAddModalService.getValidData().valid;

        validStatus !== false ? this.validSuccessful() : this.validUnsuccesful();
    };


    protected closeModal() {

        this.backlogAddModalService.closeAddTaskModal();
    };


    private validUnsuccesful() {

        const notice = this.notice;

        this.store.dispatch(checkAddTaskModal());
        notice.warning('Заполните обязательные поля!');
    };

    private validSuccessful() {

        if (!this.viewContent.isEdit) {

            this.backlogAddModalService.saveTask();
            return;
        };

        this.backlogAddModalService.editTask();
    };

};
