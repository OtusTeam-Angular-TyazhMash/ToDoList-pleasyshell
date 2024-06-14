import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TDeleteTaskModal, TTaskListContentState, selectModalDeleteTaskState } from 'src/app/module/content/backlog-content/store';
import { BacklogDeleteModalService } from 'src/app/services';
import { openWindow } from 'src/utils/animations';


@Component({
    selector: 'modal-delete-task',
    templateUrl: './modal-delete-task.component.html',
    styleUrls: ['../modal-styles.component.scss'],
    animations: [openWindow]
})

export class ModalDeleteTaskComponent {


    constructor(
        private store: Store<TTaskListContentState>,
        private deleteTaskModalService: BacklogDeleteModalService
    ) {
        this.deleteTaskModalExist();
    };


    private viewContent!: TDeleteTaskModal


    private deleteTaskModalExist() {

        this.store.select(selectModalDeleteTaskState).subscribe(result => {

            this.viewContent = result
        });
    };


    protected getModalViewContent(): TDeleteTaskModal {

        return this.viewContent
    };


    protected closeDeleteModal() {

        this.deleteTaskModalService.closeDeleteTaskModal();
    };


    protected confirmDeleteTask() {

        this.deleteTaskModalService.deleteTask();
    };

};
