import { Component } from '@angular/core';
import { BoardFilterService } from 'src/app/services';
import { BoardContentService } from 'src/app/services/board-services/board-content.service';
import { openList } from 'src/utils/animations';

@Component({
    selector: 'board-task-table',
    templateUrl: './board-task-table.component.html',
    styleUrls: ['./board-task-table.component.scss'],
    animations: [openList]
})

export class BoardTaskTableComponent {


    constructor(
        private boardContentService: BoardContentService,
        private boardFilterService: BoardFilterService
    ) { }


    // protected getTasks(): TTask[] {

    //     return this.boardContentService.filterData();
    // };


    // protected openDetail(task: TTask) {

    //     this.boardContentService.openTaskDetail(task);
    // };


    // protected openFilterList(): boolean {

    //     return this.boardFilterService.openFilter();
    // };

    // protected openList(): string {

    //     return this.boardFilterService.listStyle();
    // };


    // protected filterStatus(): boolean {

    //     return this.boardFilterService.getFilterStatus();
    // };

    // protected filterValue(): string {

    //     return this.boardFilterService.getFilterValue();
    // };

    // protected filterList(): TFilterTask[] {

    //     return this.boardFilterService.getFilterContent();
    // };

    // protected activateCurrentFilter(status: string) {

    //     this.boardFilterService.setTaskFilter(status);
    // };

};
