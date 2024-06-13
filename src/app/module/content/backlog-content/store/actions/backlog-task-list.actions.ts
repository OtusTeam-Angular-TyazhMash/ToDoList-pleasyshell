import { createAction, props } from "@ngrx/store";
import { TTask } from "../state/backlog-task-content.state";


export enum ActionType {

    LOAD_TASKS = '[TasksList] load tasks',
    LOAD_TASKS_SUCCESS = '[TasksList] load tasks success',

    SHOW_CURRENT_TASK = '[SelectedTask] show current task',
    REMOVE_SHOW_CURRENT_TASK = '[SelectedTask] remove show current task'
};

export const loadTasks = createAction(ActionType.LOAD_TASKS);
export const loadTasksSuccess = createAction(ActionType.LOAD_TASKS_SUCCESS, props<{ tasks: TTask[] }>());

export const showCurrentTask = createAction(ActionType.SHOW_CURRENT_TASK, props<{ task: TTask }>());
export const removeShowCurrentTask = createAction(ActionType.REMOVE_SHOW_CURRENT_TASK, props<{ task: TTask }>());