import { Injectable } from "@angular/core";
import { initTask } from "src/app/module/content-types";
import { TTask } from "src/app/module/content-types/task-types/task.type";
import { NoticeService } from "../notice/notice.service";

@Injectable()

export class ToDoListService {

    constructor(private notice: NoticeService) { }


    private selectedTask: TTask = initTask();
    private dataTask: TTask = initTask();

    private isOpen: boolean = false;


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


    private saveTask(currentTask: TTask) {

        const tasks = this.localAddedTasks;
        const notice = this.notice;
        const findMaxTaskId = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.Id));

        tasks.push({
            Id: findMaxTaskId + 1,
            TaskName: currentTask.TaskName,
            Description: currentTask.Description
        });
        this.isOpen = false;
        this.dataTask = initTask();
        notice.success('Успешно добавлена задача: ', `${currentTask.TaskName}`);

        console.log('Добавить новую задачу =>', findMaxTaskId + 1, currentTask.TaskName);
    };

    private editTask(currentTask: TTask) {

        const editedTask = this.localAddedTasks.find(task => task.Id === currentTask.Id);
        const notice = this.notice;

        if (editedTask) {

            editedTask.TaskName = currentTask.TaskName;
            editedTask.Description = currentTask.Description;

            this.isOpen = false;
            this.dataTask = initTask();
            notice.edit('Редактирована задача: ', `${currentTask.TaskName}`);

            console.log('Редактирована задача =>', currentTask.TaskName);
        };
    };

    public getTasks(): TTask[] {

        return [...this.localAddedTasks];
    };

    public getSelectedTask(): TTask {

        return this.selectedTask;
    };

    public getTaskModalState() : boolean {

        return this.isOpen;
    }

    public getDataForModalTask(): TTask {

        return this.dataTask;
    };
    
    public checkMode(currentTask: TTask) {

        currentTask.Id !== 0 ? this.editTask(currentTask) : this.saveTask(currentTask);
    };

    public deleteTask(currentTask: TTask) {

        const tasks = this.localAddedTasks;
        const notice = this.notice;

        const index = tasks.findIndex(task => task.Id === currentTask.Id);

        if (index !== -1) {
            tasks.splice(index, 1);
            notice.delete('Удалена задача: ', `${currentTask.TaskName}`);

            console.log('Удалить выбранную задачу по Id =>', currentTask.Id);
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
            task.isShowDescription = !task.isShowDescription;

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

    public openTaskModal(task?: TTask) {

        if (!task) {
            task = initTask();
        }
        this.dataTask = { ...task };
        this.isOpen = true;
    };

    public closeTaskModal() {

        this.isOpen = false;
        this.dataTask = initTask();
    };
}