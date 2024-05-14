import { Injectable } from '@angular/core';
import { TTask, initTask } from 'src/app/module/content-types';
import { NoticeService } from '../notice/notice.service';
import { ToDoListService } from './todolist.service';
import { FakeApiService } from '../api/fake-api.service';

@Injectable()

export class ModalService {


    constructor(
        private notice: NoticeService,
        private todolist: ToDoListService,
        private api: FakeApiService
    ) { }


    private dataTask: TTask = initTask();
    private isOpen: boolean = false;


    private saveTask(currentTask: TTask) {

        const tasks = this.todolist.getTasks();
        const notice = this.notice;
        const findMaxTaskId = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.Id));

        this.api.saveTaskOnServer({

            Id: findMaxTaskId + 1,
            TaskName: currentTask.TaskName,
            Description: currentTask.Description

        }).subscribe(() => {

            this.isOpen = false;

            this.todolist.updateTaskList();
            this.dataTask = initTask();
            notice.success('Успешно добавлена задача: ', `${currentTask.TaskName}`);

            console.log('Добавлена новая задача =>', findMaxTaskId + 1, currentTask.TaskName);
        })
    };

    private editTask(currentTask: TTask) {

        const editedTask = this.todolist.getTasks().find(task => task.Id === currentTask.Id);
        const notice = this.notice;

        if (editedTask) {

            this.api.updateTaskFromServer(currentTask).subscribe(() => {

                this.isOpen = false;

                this.todolist.updateTaskList();
                this.todolist.removeSelectedTask();
                this.dataTask = initTask();
                notice.edit('Редактирована задача: ', `${currentTask.TaskName}`);

                console.log('Редактирована задача =>', currentTask.TaskName);
            });
        };
    };


    public getTaskModalState(): boolean {

        return this.isOpen;
    };

    public getDataForModalTask(): TTask {

        return this.dataTask;
    };


    public checkMode(currentTask: TTask) {

        currentTask.Id !== 0 ? this.editTask(currentTask) : this.saveTask(currentTask);
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
