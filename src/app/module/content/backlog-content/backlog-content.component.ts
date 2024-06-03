import { Component, OnDestroy } from '@angular/core';
import { BacklogContentService, BacklogModalService } from 'src/app/services';

@Component({
    selector: 'backlog-content',
    templateUrl: './backlog-content.component.html'
})

export class BacklogContentComponent implements OnDestroy {


    constructor(
        private backlogModal: BacklogModalService,
        private backlogContentService: BacklogContentService
    ) { }


    ngOnDestroy() {

        this.backlogContentService.removeSelectedTask();
    };


    protected addTask() {

        this.backlogModal.openTaskModal();
    };

};
