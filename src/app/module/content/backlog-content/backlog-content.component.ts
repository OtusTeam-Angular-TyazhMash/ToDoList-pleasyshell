import { Component, OnDestroy } from '@angular/core';
import { BacklogAddModalService } from 'src/app/services';

@Component({
    selector: 'backlog-content',
    templateUrl: './backlog-content.component.html'
})

export class BacklogContentComponent implements OnDestroy {


    constructor(
        private backlogAddModalService: BacklogAddModalService
    ) { }


    ngOnDestroy() {

    };


    protected addTask() {

        this.backlogAddModalService.openAddTaskModal();
    };

};
