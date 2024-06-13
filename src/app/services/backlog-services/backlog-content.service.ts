import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TTaskListContentState, loadTasks, selectTasks,
    TTask, selectSelectedTask, showCurrentTask,
    removeShowCurrentTask
} from "src/app/module/content/backlog-content/store";
import { NoticeService } from "../notice/notice.service";


@Injectable()

export class BacklogContentService {


    constructor(
        private store: Store<TTaskListContentState>,
        private router: Router,
        private notice: NoticeService
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


    public setDetailTask(task: TTask) {

        // this.showDescriptionOfCurrentTask(task)
        // this.selectedTask = task;
    };


    public deleteTask() {

        // const notice = this.notice;
        // const currentTask = this.selectedTask;

        // if (currentTask.id) {

        //     this.api.deleteTaskFromServerById(currentTask.id).subscribe(() => {

        //         this.updateTaskList();
        //         this.removeSelectedTask();
        //         notice.delete('Удалена задача: ', `${currentTask.TaskName}`);

        //         console.log('Удалить выбранную задачу по Id =>', currentTask.Id);
        //     })
        // };
    };


    public updateTaskList() {

        // this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {

        //     this.localAddedTasks = tasks;
        // });
    };

    public updateTaskViewer(editedTask: TTask) {

        // this.selectedTask = editedTask;
    };


    public showDescriptionOfCurrentTask(currentTask: TTask) {

        if (currentTask.isShowDescription) {

            this.store.dispatch(removeShowCurrentTask({ task: currentTask }));
            return;
        };

        this.store.dispatch(showCurrentTask({ task: currentTask }));
    };
    
};
