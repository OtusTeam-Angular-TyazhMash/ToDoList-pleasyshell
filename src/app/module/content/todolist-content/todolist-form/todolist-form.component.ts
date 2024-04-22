import { Component, OnInit } from "@angular/core";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'todolist-form',
    templateUrl: './todolist-form.component.html',
    styleUrls: ['./todolist-form.component.scss',
        '../core.scss']
})

export class ToDoListFormComponent implements OnInit {

    constructor(protected service: ToDoListService) { }

    protected newTask: string = '';
    protected isLoading: boolean = false;


    ngOnInit() {
        setTimeout(() => {
            this.isLoading = true;
        }, 500)
    };

    protected checkTaskValid(value: string) {

        value !== '' ? this.saveTask(value) : console.log('Поле пустое!');
    };

    private saveTask(taskname: string) {

        const tasks = this.service.LocalAddedTasks;

        const findMaxTaskId = tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.Id));

        tasks.push({
            Id: findMaxTaskId + 1,
            TaskName: taskname
        });
        this.newTask = '';

        console.log('Добавить новую задачу =>', findMaxTaskId + 1, taskname)
    };
}