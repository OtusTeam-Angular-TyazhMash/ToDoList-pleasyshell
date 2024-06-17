import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { FakeApiService } from "src/app/services/api/fake-api.service";
import {
    loadTasks, loadTasksSuccess, confirmDeleteTaskModal,
    closeDeleteTaskModal, confirmSaveTask, closeAddTaskModal,
    deleteTaskSuccess, saveTaskSuccess, removeShowCurrentTask
} from "../actions/backlog-content.actions";


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
                this.api.deleteTaskFromServerById(action.task.id).pipe(
                    mergeMap(() => [
                        closeDeleteTaskModal(),
                        removeShowCurrentTask({ task: action.task }),
                        deleteTaskSuccess({ taskId: action.task.id })
                    ])
                )
            )
        )
    );

    protected confirmSaveTask$ = createEffect(() =>

        this.actions$.pipe(
            ofType(confirmSaveTask),
            mergeMap((action) =>
                this.api.saveTaskOnServer(action.task).pipe(
                    mergeMap(() => [
                        closeAddTaskModal(),
                        saveTaskSuccess({ task: action.task })
                    ])
                )
            )
        )
    );

};