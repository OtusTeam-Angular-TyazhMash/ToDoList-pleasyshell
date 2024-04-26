import { Component } from "@angular/core";
import { TTask } from "src/app/module/content-types/task-types/task.type";
import { openList } from "src/app/module/utils/animations/open-list.animation";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'added-tasks',
    templateUrl: './added-tasks.component.html',
    styleUrls: ['./added-tasks.component.scss'],
    animations: [openList]
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