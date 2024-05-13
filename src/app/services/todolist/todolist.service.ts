import { Injectable } from "@angular/core";
import {
    initTask
} from "src/app/module/content-types";
import { TTask } from "src/app/module/content-types/task-types/task.type";
import { NoticeService } from "../notice/notice.service";
import { FilterService } from "./filter.service";
import { FakeApiService } from "../api/fake-api.service";

@Injectable()

export class ToDoListService {

    constructor(
        private notice: NoticeService,
        private filter: FilterService,
        private api: FakeApiService
    ) {
        this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {
            this.localAddedTasks = tasks;
        });
    }


    private selectedTask: TTask = initTask();
    private localAddedTasks: TTask[] = [];


    public getTasks(): TTask[] {

        return this.localAddedTasks;
    };

    public getSelectedTask(): TTask {

        return this.selectedTask;
    };


    public updateTaskList() {

        this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {
            this.localAddedTasks = tasks;
        })
    };

    public filterData(): TTask[] {

        const filterVal = this.filter.getFilterValue();
        const tasks = this.localAddedTasks;

        if (filterVal === 'Все') {

            return tasks;

        } else if (filterVal === 'Выполнены') {

            return tasks.filter(task => task.isCompleted);

        } else if (filterVal === 'Не выполнены') {

            return tasks.filter(task => !task.isCompleted);

        } else {

            return tasks;
        };
    };

    public deleteTask(currentTask: TTask) {

        const notice = this.notice;

        if (currentTask.id) {

            this.api.deleteTaskFromServerById(currentTask.id).subscribe(() => {

                this.updateTaskList();
                this.removeSelectedTask();
                notice.delete('Удалена задача: ', `${currentTask.TaskName}`);

                console.log('Удалить выбранную задачу по Id =>', currentTask.Id);
            })
        };
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
    };

    public removeSelectedTask() {

        const tasks = this.localAddedTasks;

        tasks.forEach(x => {

            if (x === this.selectedTask) {
                x.isShowDescription = false;
            }
        })

        this.selectedTask = initTask();
    };

    public changeTaskStatus(event: any, currentTask: TTask) {

        const tasks = this.localAddedTasks;
        const editedTaskStatus = tasks.find(task => task.Id === currentTask.Id);
        const isChecked = event.target.checked;

        if (editedTaskStatus && isChecked) {

            editedTaskStatus.isCompleted = true;

        } else {

            if (editedTaskStatus) {

                editedTaskStatus.isCompleted = false;
            };
        };
    };
}