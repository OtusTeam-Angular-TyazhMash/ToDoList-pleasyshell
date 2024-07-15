import { createAction, props } from "@ngrx/store";
import { TFilter } from "../state/board-tasks-content.state";
import { BoardTasksActions } from "./board-actions.enum";
import { TTask } from "../../../backlog-content/store";

export const loadTasksForBoard = createAction(BoardTasksActions.LOAD_TASKS_FOR_BOARD);
export const loadTasksForBoardSuccess = createAction(BoardTasksActions.LOAD_TASKS_FOR_BOARD_SUCCESS, props<{ tasks: TTask[] }>());
export const defaultFilteredTasksOnLoad = createAction(BoardTasksActions.DEFAULT_FILTERED_TASKS_ON_LOAD);
export const filterTasks = createAction(BoardTasksActions.FILTER_TASKS, props<{ filter: TFilter }>());
export const setFieldTaskStatus = createAction(BoardTasksActions.SET_FIELD_TASK_STATUS, props<{ filter: TFilter }>());