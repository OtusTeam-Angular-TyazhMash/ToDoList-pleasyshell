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

        value !== '' ? this.addTask(value) : console.log('Поле пустое!');
    };

    private addTask(taskname: string) {

        this.service.saveTask(taskname);
        this.newTask = '';
    };
}