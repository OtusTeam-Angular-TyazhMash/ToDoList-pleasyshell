import { Injectable } from '@angular/core';
import { TTask, resetInitTask } from 'src/app/module/content-types';
import { FakeApiService } from '../api/fake-api.service';
import { Router } from '@angular/router';
import { NoticeService } from '../notice/notice.service';

@Injectable()

export class BacklogContentService {


    constructor(
        private api: FakeApiService,
        private router: Router,
        private notice: NoticeService
    ) {
        this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {
            this.localAddedTasks = tasks;
        });
    };


    private selectedTask: TTask = resetInitTask();
    private localAddedTasks: TTask[] = [];


    public getTasks(): TTask[] {

        return this.localAddedTasks;
    };

    public getSelectedTask(): TTask {

        return this.selectedTask;
    };


    public deleteTask() {

        const notice = this.notice;
        const currentTask = this.selectedTask;

        if (currentTask.id) {

            this.api.deleteTaskFromServerById(currentTask.id).subscribe(() => {

                this.updateTaskList();
                this.removeSelectedTask();
                notice.delete('Удалена задача: ', `${currentTask.TaskName}`);

                console.log('Удалить выбранную задачу по Id =>', currentTask.Id);
            })
        };
    };


    public updateTaskList() {

        this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {

            this.localAddedTasks = tasks;
        });
    };

    public updateTaskViewer(editedTask: TTask) {

        this.selectedTask = editedTask;
    };


    public showDescriptionOfCurrentTask(task: TTask) {

        const tasks = this.localAddedTasks;

        if (task.isShowDescription) {

            this.removeSelectedTask();

        } else {

            tasks.forEach(x => {

                if (x !== task) {

                    x.isShowDescription = false;
                };
            })

            task.isShowDescription = true;
            this.selectedTask = task;
        };

        this.router.navigate(['backlog', task.Id]);
    };

    public removeSelectedTask() {

        const tasks = this.localAddedTasks;

        tasks.forEach(x => {

            if (x === this.selectedTask) {

                x.isShowDescription = false;
            }
        })

        this.selectedTask = resetInitTask();
    };

};
