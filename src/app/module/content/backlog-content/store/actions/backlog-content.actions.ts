import { createAction, props } from "@ngrx/store";
import { TStatus, TTask } from "../state/backlog-task-content.state";
import {
    TasksListActions, SelectedTaskActions,
    AddTaskModalActions, DeleteTaskModalActions
} from "./actions.enum";


export const loadTasks = createAction(TasksListActions.LOAD_TASKS);
export const loadTasksSuccess = createAction(TasksListActions.LOAD_TASKS_SUCCESS, props<{ loadedTasks: TTask[] }>());


export const showCurrentTask = createAction(SelectedTaskActions.SHOW_CURRENT_TASK, props<{ task: TTask }>());
export const removeShowCurrentTask = createAction(SelectedTaskActions.REMOVE_SHOW_CURRENT_TASK, props<{ task: TTask }>());


export const openAddTaskModal = createAction(AddTaskModalActions.OPEN_ADD_TASK_MODAL, props<{ task?: TTask }>());
export const closeAddTaskModal = createAction(AddTaskModalActions.CLOSE_ADD_TASK_MODAL);
export const setFieldTaskName = createAction(AddTaskModalActions.SET_FIELD_TASKNAME, props<{ taskname: string }>());
export const setFieldTaskStatus = createAction(AddTaskModalActions.SET_FIELD_TASK_STATUS, props<{ status: TStatus }>());
export const setFieldTaskDescription = createAction(AddTaskModalActions.SET_FIELD_TASK_DESCRIPTION, props<{ description: string }>());
export const confirmSaveTask = createAction(AddTaskModalActions.CONFIRM_ADD_TASK, props<{ savedTask: TTask }>());
export const confirmEditTask = createAction(AddTaskModalActions.CONFIRM_EDIT_TASK, props<{ editedTask: TTask }>());
export const checkAddTaskModal = createAction(AddTaskModalActions.CHECK_ADD_TASK_MODAL);
export const saveTaskSuccess = createAction(AddTaskModalActions.ADD_TASK_SUCCESS, props<{ savedTask: TTask }>());
export const editTaskSuccess = createAction(AddTaskModalActions.EDIT_TASK_SUCCESS, props<{ editedTask: TTask }>());


export const openDeleteTaskModal = createAction(DeleteTaskModalActions.OPEN_DELETE_TASK_MODAL, props<{ task: TTask }>());
export const closeDeleteTaskModal = createAction(DeleteTaskModalActions.CLOSE_DELETE_TASK_MODAL);
export const confirmDeleteTaskModal = createAction(DeleteTaskModalActions.CONFIRM_DELETE_TASK, props<{ task: TTask }>());
export const deleteTaskSuccess = createAction(DeleteTaskModalActions.DELETE_TASK_SUCCESS, props<{ taskId?: string }>());