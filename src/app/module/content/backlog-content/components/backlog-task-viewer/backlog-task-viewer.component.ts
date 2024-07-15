import { Component } from '@angular/core';
import { BacklogAddModalService, BacklogContentService, BacklogDeleteModalService } from 'src/app/services';
import {
    TTask,
    TTaskListContentState, openAddTaskModal, removeShowCurrentTask, reset
} from '../../store';
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
        private backlogDeleteModalService: BacklogDeleteModalService,
        private backlogAddModalService: BacklogAddModalService
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

        this.store.dispatch(removeShowCurrentTask({ task: currentTask }))
    };


    protected openDeleteModal(task: TTask) {

        this.backlogDeleteModalService.openDeleteTaskModal(task);
    };

    protected openEditModal(task: TTask) {

        this.backlogAddModalService.openAddTaskModal(task);
    };;

};
