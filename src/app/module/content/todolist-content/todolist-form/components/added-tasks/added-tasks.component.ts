import { Component } from "@angular/core";
import { TTask } from "src/app/module/content-types/task-types/task.type";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'added-tasks',
    templateUrl: './added-tasks.component.html',
    styleUrls: ['../../../core.scss']
})

export class AddedTasksComponent {

    constructor(protected service: ToDoListService) { }


    protected loadTasks(): TTask[] {

        return this.service.getTasks();
    }

    protected deleteTaskById(taskId: number) {

        this.service.deleteTask(taskId);
    }
}