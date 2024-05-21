import { Component, OnInit } from "@angular/core";
import { TFilter, TFilterTask } from "src/app/module/content-types/task-types/filter.type";
import { openList } from "src/app/module/utils/animations";
import {
    FilterService,
    ModalService
} from "src/app/services";

@Component({
    selector: 'todolist-form',
    templateUrl: './todolist-form.component.html',
    styleUrls: ['./todolist-form.component.scss'],
    animations: [openList]
})

export class ToDoListFormComponent implements OnInit {

    constructor(private modalSer: ModalService, private filterSer: FilterService) { }


    protected isLoading: boolean = false;


    ngOnInit() {
        setTimeout(() => {
            this.isLoading = true;
        }, 500)
    };

    protected openModal() {

        this.modalSer.openTaskModal();
    };


    protected openFilterList(): boolean {

        return this.filterSer.openFilter();
    };

    protected openList(): string {

        return this.filterSer.listStyle();
    };


    protected filterStatus(): boolean {

        return this.filterSer.getFilterStatus();
    };

    protected filterValue(): string {

        return this.filterSer.getFilterValue();
    };

    protected filterList(): TFilterTask[] {

        return this.filterSer.getFilterContent();
    };

    protected activateCurrentFilter(status: string) {

        this.filterSer.setTaskFilter(status);
    };
}