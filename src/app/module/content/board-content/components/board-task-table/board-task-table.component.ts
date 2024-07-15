import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardContentService } from 'src/app/services/board-services/board-content.service';
import { TStatus, TTask } from '../../../backlog-content/store';
import { TBoardTasksListContentState, TFilter } from '../../store';
import { Store } from '@ngrx/store';
import { setFieldTaskStatus } from '../../store/actions/board-content.actions';

@Component({
    selector: 'board-task-table',
    templateUrl: './board-task-table.component.html',
    styleUrls: ['./board-task-table.component.scss']
})

export class BoardTaskTableComponent {


    constructor(
        private boardContentService: BoardContentService,
        private store: Store<TBoardTasksListContentState>,
    ) {
        this.filterByStatus = boardContentService.filterByStatusInit$;
    };


    private allFilters: TFilter[] = [
        {
            Id: 0,
            FilterName: 'Все'
        },
        {
            Id: 1,
            FilterName: 'Не выполнены'
        },
        {
            Id: 2,
            FilterName: 'Выполнены'
        },
    ];


    protected filterByStatus: Observable<TFilter>;


    protected getFilterdTasksFromStore(): TTask[] {

        return this.boardContentService.getFilteredTasks();
    };

    protected getAllStatuses(): TFilter[] {

        return this.allFilters;
    };


    protected onFilterOfTaskStatusChange(_filter: TFilter) {

        this.store.dispatch(setFieldTaskStatus({filter: _filter}));
        this.boardContentService.setFilteredTasksByStatus();
    };

};
