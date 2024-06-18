import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FakeApiService } from "src/app/services/api/fake-api.service";
import { defaultFilteredTasksOnLoad, loadTasksForBoard, loadTasksForBoardSuccess } from "../actions/board-content.actions";
import { mergeMap } from "rxjs";

@Injectable()

export class BoardContentEffects {


    constructor(
        private actions$: Actions,
        private api: FakeApiService
    ) { }


    protected loadTasksForBoard$ = createEffect(() =>

        this.actions$.pipe(
            ofType(loadTasksForBoard),
            mergeMap(() =>
                this.api.getTasksFromServer().pipe(
                    mergeMap((_tasks) => [
                        loadTasksForBoardSuccess({ tasks: _tasks }),
                        defaultFilteredTasksOnLoad()
                    ])
                )
            )
        )
    );
}