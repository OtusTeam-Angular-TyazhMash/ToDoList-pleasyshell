import { Component } from "@angular/core";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'added-tasks',
    templateUrl: './added-tasks.component.html',
    styleUrls: ['../../../core.scss']
})

export class AddedTasksComponent {

    constructor(protected service: ToDoListService) { }

    protected deleteTask(taskId: number) {

        const tasks = this.service.LocalAddedTasks;

        const index = tasks.findIndex(task => task.Id === taskId);

        if (index !== -1) {
            tasks.splice(index, 1);

            console.log('Удалить выбранную задачу по Id =>', taskId);
        }
    }
}