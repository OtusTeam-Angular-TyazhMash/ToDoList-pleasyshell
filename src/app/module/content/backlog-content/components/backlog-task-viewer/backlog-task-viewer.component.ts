import { Component } from '@angular/core';
import { BacklogContentService } from 'src/app/services';

@Component({
    selector: 'backlog-task-viewer',
    templateUrl: './backlog-task-viewer.component.html',
    styleUrls: ['./backlog-task-viewer.component.scss']
})
export class BacklogTaskViewerComponent {


    constructor(
        private backlogContentService: BacklogContentService
    ) { }


    protected getTask() {

        return this.backlogContentService.getSelectedTask();
    };

    
    protected cancellTaskWatch() {

        this.backlogContentService.removeSelectedTask();
    };

};
