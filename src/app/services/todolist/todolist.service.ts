import { Injectable } from "@angular/core";
import { initTask } from "src/app/module/content-types";
import { TTask } from "src/app/module/content-types/task-types/task.type";

@Injectable()

export class ToDoListService {

    private selectedTask: TTask = initTask();

    private localAddedTasks: TTask[] = [
        {
            Id: 1,
            TaskName: 'Помыть посуду',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            Id: 2,
            TaskName: 'Приготовить ужин',
        },
        {
            Id: 3,
            TaskName: 'Погулять в парке',
            Description: 'А то все время работа и работа...'
        },
        {
            Id: 4,
            TaskName: 'Поговорить с Ларисой',
            Description: 'О повышении ЗП'
        },
        {
            Id: 5,
            TaskName: 'Работать',
            Description: 'Деньги это круто'
        }
    ];

    public getTasks(): TTask[] {

        return [...this.localAddedTasks];
    };

    public getSelectedTask(): TTask {

        return this.selectedTask;
    };

    public saveTask(taskname: string, description?: string) {

        const tasks = this.localAddedTasks;

        const findMaxTaskId = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.Id));

        tasks.push({
            Id: findMaxTaskId + 1,
            TaskName: taskname,
            Description: description
        });

        console.log('Добавить новую задачу =>', findMaxTaskId + 1, taskname);
    };

    public deleteTask(taskId: number) {

        const tasks = this.localAddedTasks;

        const index = tasks.findIndex(task => task.Id === taskId);

        if (index !== -1) {
            tasks.splice(index, 1);

            console.log('Удалить выбранную задачу по Id =>', taskId);
        };
    };

    public showDescriptionOfCurrentTask(task: TTask) {

        const tasks = this.localAddedTasks;

        tasks.forEach(x => {

            if (x !== task) {
                x.isShowDescription = false;
            };
        })
        task.isShowDescription = !task.isShowDescription;

        this.selectedTask = task;
    };

    public removeSelectedTask() {

        const tasks = this.localAddedTasks;

        tasks.forEach(x => {
            
            if (x === this.selectedTask) {
                x.isShowDescription = false;
            }
        })

        this.selectedTask = initTask();
    }
}