import { Component } from "@angular/core";
import { TTask } from "src/app/module/content-types/task-types/task.type";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'added-tasks',
    templateUrl: './added-tasks.component.html',
    styleUrls: ['./added-tasks.component.scss'],
})

export class AddedTasksComponent {

    constructor(protected service: ToDoListService) { }


    protected loadTasks(): TTask[] {

        return this.service.getTasks();
    }

    protected deleteTaskById(task: TTask) {

        this.service.deleteTask(task);
    }

    protected showDescription(task: TTask) {

        this.service.showDescriptionOfCurrentTask(task);
    };

    protected openEditModal(task: TTask) {

        this.service.OpenTaskModal(task);
    }
}