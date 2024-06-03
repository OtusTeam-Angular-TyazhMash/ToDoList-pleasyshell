import { Component } from '@angular/core';
import { TTask } from 'src/app/module/content-types';
import { BoardContentService } from 'src/app/services/board-services/board-content.service';

@Component({
    selector: 'board-task-table',
    templateUrl: './board-task-table.component.html',
    styleUrls: ['./board-task-table.component.scss']
})

export class BoardTaskTableComponent {


    constructor(
        private boardContentService: BoardContentService
    ) { }


    protected getTasks(): TTask[] {

        return this.boardContentService.getBoardTasks();
    };

}
