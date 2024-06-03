import { Injectable } from '@angular/core';
import { NoticeService } from '../notice/notice.service';
import { BacklogContentService } from './backlog-content.service';
import { FakeApiService } from '../api/fake-api.service';
import { TTask, resetInitTask } from 'src/app/module/content-types';

@Injectable()

export class BacklogModalService {


    constructor(
        private notice: NoticeService,
        private backlogContentService: BacklogContentService,
        private api: FakeApiService
    ) { }


    private dataTask: TTask = resetInitTask();
    private isOpen: boolean = false;


    private saveTask(currentTask: TTask) {

        const tasks = this.backlogContentService.getTasks();
        const notice = this.notice;
        const findMaxTaskId = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.Id));

        this.api.saveTaskOnServer({

            Id: findMaxTaskId + 1,
            TaskName: currentTask.TaskName,
            TaskStatus: currentTask.TaskStatus,
            Description: currentTask.Description

        }).subscribe(() => {

            this.isOpen = false;

            this.backlogContentService.updateTaskList();
            this.dataTask = resetInitTask();

            notice.success('Успешно добавлена задача: ', `${currentTask.TaskName}`);

            console.log('Добавлена новая задача =>', findMaxTaskId + 1, currentTask.TaskName);
        })
    };

    private editTask(currentTask: TTask) {

        const editedTask = this.backlogContentService.getTasks().find(task => task.Id === currentTask.Id);
        const notice = this.notice;

        if (editedTask) {

            this.api.updateTaskFromServer(currentTask).subscribe(() => {

                this.isOpen = false;

                this.backlogContentService.updateTaskList();
                this.backlogContentService.updateTaskViewer(currentTask);

                this.dataTask = resetInitTask();

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


    public openTaskModal() {

        let item = this.backlogContentService.getSelectedTask();

        if (!item) {

            item = resetInitTask();
        };

        this.dataTask = { ...item };
        this.isOpen = true;
    };

    public closeTaskModal() {

        this.isOpen = false;
        this.dataTask = resetInitTask();
    };

};
