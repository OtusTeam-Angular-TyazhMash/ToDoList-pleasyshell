import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { FakeApiService } from "src/app/services/api/fake-api.service";
import { loadTasks, loadTasksSuccess, showCurrentTask } from "../actions/backlog-task-list.actions";
import { BacklogContentService } from "src/app/services";


@Injectable()

export class BacklogTaskListEffects {


    constructor(
        private actions$: Actions,
        private api: FakeApiService
    ) { }


    protected loadTasks$ = createEffect(() =>

        this.actions$.pipe(
            ofType(loadTasks),
            mergeMap(() =>
                this.api.getTasksFromServer().pipe(
                    map(tasks => loadTasksSuccess({ tasks }))
                ))
        ));
}