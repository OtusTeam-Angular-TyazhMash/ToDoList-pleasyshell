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

    protected NewTask: string = '';
    protected isLoading: boolean = false;


    ngOnInit() {
        setTimeout(() => {
            this.isLoading = true;
        }, 500)
    };

    protected CheckTaskValid(value: string) {

        value !== '' ? this.SaveTask(value) : console.log('Поле пустое!');
    };

    private SaveTask(taskname: string) {

        const Tasks = this.service.LocalAddedTasks;

        const FindMaxTaskId = Tasks.length === 0 ? 0 : Math.max(...Tasks.map(task => task.Id));

        Tasks.push({
            Id: FindMaxTaskId + 1,
            TaskName: taskname
        });
        this.NewTask = '';

        console.log('Добавить новую задачу =>', FindMaxTaskId + 1, taskname)
    };
}