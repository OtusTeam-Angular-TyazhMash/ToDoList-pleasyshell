import { Component } from '@angular/core';
import { BacklogModalService } from 'src/app/services';

@Component({
    selector: 'backlog-content',
    templateUrl: './backlog-content.component.html'
})

export class BacklogContentComponent {


    constructor(
        private backlogModal: BacklogModalService
    ) { }


    protected addTask() {

        this.backlogModal.openTaskModal();
    };

};
