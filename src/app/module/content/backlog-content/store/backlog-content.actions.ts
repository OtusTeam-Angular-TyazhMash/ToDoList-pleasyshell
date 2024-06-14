import { createAction, props } from "@ngrx/store";
import { TTask } from "./state/backlog-task-content.state";


export enum ActionType {

    LOAD_TASKS = '[TasksList] load tasks',
    LOAD_TASKS_SUCCESS = '[TasksList] load tasks success',

    UPDATE_TASKS = '[TasksList] update tasks',
    UPDATE_TASKS_SUCCESS = '[TasksList] update tasks success',

    SHOW_CURRENT_TASK = '[SelectedTask] show current task',
    REMOVE_SHOW_CURRENT_TASK = '[SelectedTask] remove show current task',

    OPEN_DELETE_TASK_MODAL = '[DeleteTaskModal] open delete task modal',
    CLOSE_DELETE_TASK_MODAL = '[DeleteTaskModal] close delete task modal',
    CONFIRM_DELETE_TASK = '[DeleteTaskModal] confirm delete task'
};

export const loadTasks = createAction(ActionType.LOAD_TASKS);
export const loadTasksSuccess = createAction(ActionType.LOAD_TASKS_SUCCESS, props<{ loadedTasks: TTask[] }>());

export const updateTasks = createAction(ActionType.UPDATE_TASKS);
export const updateTasksSuccess = createAction(ActionType.UPDATE_TASKS_SUCCESS, props<{ updatedTasks: TTask[] }>());

export const showCurrentTask = createAction(ActionType.SHOW_CURRENT_TASK, props<{ task: TTask }>());
export const removeShowCurrentTask = createAction(ActionType.REMOVE_SHOW_CURRENT_TASK, props<{ task: TTask }>());

export const openDeleteTaskModal = createAction(ActionType.OPEN_DELETE_TASK_MODAL, props<{ task: TTask }>());
export const closeDeleteTaskModal = createAction(ActionType.CLOSE_DELETE_TASK_MODAL);
export const confirmDeleteTaskModal = createAction(ActionType.CONFIRM_DELETE_TASK, props<{ taskId: string }>());