import { Injectable } from "@angular/core";
import { TTask } from "src/app/module/content-types/task-types/task.type";

@Injectable()

export class ToDoListService {

    private localAddedTasks: TTask[] = [
        {
            Id: 1,
            TaskName: 'Помыть посуду'
        },
        {
            Id: 2,
            TaskName: 'Приготовить ужин'
        },
        {
            Id: 3,
            TaskName: 'Погулять в парке'
        },
        {
            Id: 4,
            TaskName: 'Поговорить с Ларисой'
        },
        {
            Id: 5,
            TaskName: 'Работать'
        }
    ];

    public getTasks(): TTask[] {
        return [...this.localAddedTasks];
    };

    public saveTask(taskname: string) {

        const tasks = this.localAddedTasks;

        const findMaxTaskId = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.Id));

        tasks.push({
            Id: findMaxTaskId + 1,
            TaskName: taskname
        });

        console.log('Добавить новую задачу =>', findMaxTaskId + 1, taskname)
    };

    public deleteTask(taskId: number) {

        const tasks = this.localAddedTasks;

        const index = tasks.findIndex(task => task.Id === taskId);

        if (index !== -1) {
            tasks.splice(index, 1);

            console.log('Удалить выбранную задачу по Id =>', taskId);
        }
    };
}  