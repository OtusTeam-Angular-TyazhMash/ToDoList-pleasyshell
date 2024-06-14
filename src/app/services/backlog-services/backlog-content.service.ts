import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TTaskListContentState, loadTasks, selectTasks,
    TTask, selectSelectedTask, showCurrentTask,
    removeShowCurrentTask
} from "src/app/module/content/backlog-content/store";


@Injectable()

export class BacklogContentService {


    constructor(
        private store: Store<TTaskListContentState>,
        private router: Router
    ) {
        this.store.dispatch(loadTasks());

        this.tasks$ = this.store.select(selectTasks);
        this.selectedTask$ = this.store.select(selectSelectedTask);
    };

    private tasks$: Observable<TTask[]>;
    private selectedTask$: Observable<TTask>;


    public getTasks(): Observable<TTask[]> {

        return this.tasks$;
    };

    public getSelectedTask(): Observable<TTask> {

        return this.selectedTask$;
    };


    public updateTasksList() {

       
    };


    public showDescriptionOfCurrentTask(currentTask: TTask) {

        if (currentTask.isShowDescription) {

            this.store.dispatch(removeShowCurrentTask({ task: currentTask }));
            this.router.navigate(['backlog', '']);
            return;
        };

        this.store.dispatch(showCurrentTask({ task: currentTask }));
        this.router.navigate(['backlog', `${currentTask.Id}`]);
    };

};
