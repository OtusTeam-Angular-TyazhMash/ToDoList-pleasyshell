import { Injectable } from '@angular/core';
import { TTask, resetInitTask } from 'src/app/module/content-types';
import { FakeApiService } from '../api/fake-api.service';
import { Router } from '@angular/router';

@Injectable()

export class BacklogContentService {


    constructor(
        private api: FakeApiService,
        private router: Router
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
        this.router.navigate(['backlog']);
    };



};
