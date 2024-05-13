import { Component } from "@angular/core";
import { TTask } from "src/app/module/content-types/task-types/task.type";
import {
    FakeApiService,
    ModalService,
    ToDoListService
} from "src/app/services";

@Component({
    selector: 'added-tasks',
    templateUrl: './added-tasks.component.html',
    styleUrls: ['./added-tasks.component.scss'],
})

export class AddedTasksComponent {

    constructor(
        private todolistSer: ToDoListService,
        private modalSer: ModalService,
        private api: FakeApiService
    ) { }


    protected loadTasks(): TTask[] {

        return this.todolistSer.filterData();
    }

    protected deleteTaskById(task: TTask) {

        this.todolistSer.deleteTask(task);
    }

    protected showDescription(task: TTask) {

        this.todolistSer.showDescriptionOfCurrentTask(task);
    };

    protected openEditModal(task: TTask) {

        this.modalSer.openTaskModal(task);
    }

    protected setStatus(event: any, task: TTask) {

        this.todolistSer.changeTaskStatus(event, task);
    }
}