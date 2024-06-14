import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { FakeApiService } from "src/app/services/api/fake-api.service";
import {
    closeDeleteTaskModal, confirmDeleteTaskModal,
    loadTasks, loadTasksSuccess,
    updateTasks,
    updateTasksSuccess
} from "./backlog-content.actions";


@Injectable()

export class BacklogContentEffects {


    constructor(
        private actions$: Actions,
        private api: FakeApiService
    ) { }


    protected loadTasks$ = createEffect(() =>

        this.actions$.pipe(
            ofType(loadTasks),
            mergeMap(() =>
                this.api.getTasksFromServer().pipe(
                    map(tasks => loadTasksSuccess({ loadedTasks: tasks }))

                )
            )
        )
    );

    protected confirmDeleteTask$ = createEffect(() =>

        this.actions$.pipe(
            ofType(confirmDeleteTaskModal),
            mergeMap((action) =>
                this.api.deleteTaskFromServerById(action.taskId).pipe(
                    map(x => closeDeleteTaskModal())
                )
            )
        )
    );

    protected updateTasks$ = createEffect(() =>

        this.actions$.pipe(
            ofType(updateTasks),
            mergeMap(() =>
                this.api.getTasksFromServer().pipe(
                    map(tasks => updateTasksSuccess({ updatedTasks: tasks }))
                )
            )
        )
    );
}