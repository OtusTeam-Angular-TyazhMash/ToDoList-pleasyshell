import { Component } from '@angular/core';
import { TTask } from 'src/app/module/content-types';
import { BacklogContentService } from 'src/app/services';
import { BacklogModalService } from 'src/app/services/backlog-services/backlog-modal.service';
import { TTaskListContentState, removeShowCurrentTask, reset } from '../../store';
import { Store } from '@ngrx/store';

@Component({
    selector: 'backlog-task-viewer',
    templateUrl: './backlog-task-viewer.component.html',
    styleUrls: ['./backlog-task-viewer.component.scss']
})
export class BacklogTaskViewerComponent {


    constructor(
        private store: Store<TTaskListContentState>,
        private backlogContentService: BacklogContentService,
        private backlogModal: BacklogModalService
    ) { }


    private viewTask$: TTask = reset();


    protected getTask(): TTask {

        const selectedTask = this.backlogContentService.getSelectedTask();

        selectedTask.subscribe(x => {
            this.viewTask$ = x;
        });

        return this.viewTask$;
    };


    protected cancellTaskWatch(currentTask: TTask) {

        this.store.dispatch(removeShowCurrentTask({task: currentTask}))
    };


    protected deleteTaskById() {

        this.backlogContentService.deleteTask();
    };


    protected openEditModal(task: TTask) {

        this.backlogModal.openTaskModal(task);
    };

};
