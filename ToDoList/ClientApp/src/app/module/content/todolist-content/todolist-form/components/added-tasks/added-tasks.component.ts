import { Component } from "@angular/core";
import { ToDoListService } from "src/app/services";

@Component({
    selector: 'added-tasks',
    templateUrl: './added-tasks.component.html',
    styleUrls: ['../../../../../../styles/modal-styles.scss',
        '../../../../../../styles/button-styles.scss']
})

export class AddedTasksComponent {
    
    
    constructor(protected service: ToDoListService) { }

    protected DeleteTask(taskId: number) {

        const Tasks = this.service.LocalAddedTasks;

        const index = Tasks.findIndex(task => task.Id === taskId);

        if (index !== -1) {
            Tasks.splice(index, 1);

            console.log('Удалить выбранную задачу по Id =>', taskId);
        }
    }
}