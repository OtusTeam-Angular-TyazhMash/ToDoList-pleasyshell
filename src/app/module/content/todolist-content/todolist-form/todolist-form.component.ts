import { Component } from "@angular/core";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'todolist-form',
    templateUrl: './todolist-form.component.html',
    styleUrls: ['./todolist-form.component.scss',
        '../../../../styles/button-styles.scss',
        '../../../../styles/modal-styles.scss']
})

export class ToDoListFormComponent {

    constructor(protected service: ToDoListService) { }

    protected NewTask: string = '';
    

    protected SaveTask(taskname: string) {

        const Tasks = this.service.LocalAddedTasks;

        const FindMaxTaskId = Math.max.apply(Math, Tasks.map(function (task) {
            return task.Id
        }));

        Tasks.push({
            Id: FindMaxTaskId + 1,
            TaskName: taskname
        });
        this.NewTask = '';

        console.log('Добавить новую задачу =>', FindMaxTaskId + 1, taskname)
    }
}