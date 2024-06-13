import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BacklogContentService } from 'src/app/services';
import { TTask } from '../../store';

@Component({
    selector: 'backlog-task-list',
    templateUrl: './backlog-task-list.component.html',
    styleUrls: ['./backlog-task-list.component.scss']
})
export class BacklogTaskListComponent {


    constructor(
        private backlogContentService: BacklogContentService
    ) { }


    protected isLoaded: boolean = false;


    ngOnInit() {
        setTimeout(() => {
            this.isLoaded = true;
        }, 500)
    };


    protected loadTasks(): Observable<TTask[]> {

        return this.backlogContentService.getTasks();
    };

    protected showDescription(task: TTask) {

        this.backlogContentService.showDescriptionOfCurrentTask(task);
    };

};
