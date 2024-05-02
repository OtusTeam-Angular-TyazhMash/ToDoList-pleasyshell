import { Component, OnInit } from "@angular/core";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'todolist-form',
    templateUrl: './todolist-form.component.html',
    styleUrls: ['./todolist-form.component.scss']
})

export class ToDoListFormComponent implements OnInit {

    constructor(protected service: ToDoListService) { }

    protected newTask: string = '';
    protected descriptionOfTask: string = '';

    protected isLoading: boolean = false;


    ngOnInit() {
        setTimeout(() => {
            this.isLoading = true;
        }, 500)
    };

    protected checkTaskValid(value: string, dopValue?: string) {

        value !== '' ? this.addTask(value, dopValue) : console.log('Поле названия задачи пустое! Валидация не пройдена.');
    };

    private addTask(taskname: string, description?: string) {

        this.service.saveTask(taskname, description);
        this.newTask = '';
        this.descriptionOfTask = '';
    };
}