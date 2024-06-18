import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TTask } from 'src/app/module/content/backlog-content/store';
import {
    TBoardTasksListContentState, TFilter, selectFilterData,
    selectBoardTasks,
    selectFilteredBoardTasks
} from 'src/app/module/content/board-content/store';
import { loadTasksForBoard } from 'src/app/module/content/board-content/store/actions/board-content.actions';

@Injectable()

export class BoardContentService {


    constructor(
        private store: Store<TBoardTasksListContentState>,
        private router: Router
    ) {
        this.store.dispatch(loadTasksForBoard())
        this.store.select(selectBoardTasks).subscribe(result => {

            this.viewTasks = result;
        });

        this.filterByStatusInit$ = this.store.select(selectFilterData);
    };


    private viewTasks: TTask[] = [];


    public filterByStatusInit$: Observable<TFilter>;


    public getFilteredTasks(): TTask[] {

        return this.viewTasks;
    };


    public setFilteredTasksByStatus() {

        this.store.select(selectFilteredBoardTasks).subscribe(result => {

            this.viewTasks = result;
        });
    };

};
