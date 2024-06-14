import { Component } from '@angular/core';
import { TStatus, TTask } from 'src/app/module/content-types';
import {
    BacklogAddModalService,
    NoticeService
} from 'src/app/services';

import { openList, openWindow } from 'src/utils/animations';

@Component({
    selector: 'modal-task',
    templateUrl: './modal-task.component.html',
    styleUrls: ['../modal-styles.component.scss',
        '../../styles/button-styles.scss'],
    animations: [openWindow, openList]
})

export class ModalTaskComponent {


    constructor(
        private notice: NoticeService,
        private backlogAddModalService: BacklogAddModalService
    ) { }


    private isStatusListOpen: boolean = false;
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


    protected getData(): TTask {

        return this.backlogAddModalService.getDataForModalTask();
    };

    protected getStatuses(): TStatus[] {

        return this.allStatuses;
    };

    protected getStatusListState(): boolean {

        return this.isStatusListOpen;
    };


    protected modalState(): boolean {

        return this.backlogAddModalService.getTaskModalState();
    };


    protected sendTaskName(event: KeyboardEvent) {

        const { value } = event.target as HTMLInputElement;

        this.getData().TaskName = value;
    };

    protected sendDescription(event: KeyboardEvent) {

        const { value } = event.target as HTMLInputElement;

        this.getData().Description = value;
    };


    protected checkTaskValid(task: TTask) {

        const notice = this.notice;
        const service = this.backlogAddModalService;

        this.getData().TaskName !== '' ? service.checkMode(task) : notice.warning('Введите название задачи!');
    };


    protected openList() {

        this.isStatusListOpen = true;
    };

    protected onClickStatus(status: TStatus) {

        this.getData().TaskStatus = status;
        this.isStatusListOpen = false;
    };

    protected listSelected() {

        return this.isStatusListOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    };


    protected Close() {

        this.isStatusListOpen = false;
        this.backlogAddModalService.closeTaskModal();
    };

};
