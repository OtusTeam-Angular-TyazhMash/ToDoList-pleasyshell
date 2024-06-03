import { Component } from '@angular/core';
import { TTask } from 'src/app/module/content-types';
import { BacklogContentService } from 'src/app/services';
import { BacklogModalService } from 'src/app/services/backlog-services/backlog-modal.service';

@Component({
    selector: 'backlog-task-viewer',
    templateUrl: './backlog-task-viewer.component.html',
    styleUrls: ['./backlog-task-viewer.component.scss']
})
export class BacklogTaskViewerComponent {


    constructor(
        private backlogContentService: BacklogContentService,
        private backlogModal: BacklogModalService
    ) { }


    protected getTask() {

        return this.backlogContentService.getSelectedTask();
    };


    protected cancellTaskWatch() {

        this.backlogContentService.removeSelectedTask();
    };


    protected deleteTaskById() {

        this.backlogContentService.deleteTask();
    };


    protected openEditModal(task: TTask) {

        this.backlogModal.openTaskModal(task);
    };

};
