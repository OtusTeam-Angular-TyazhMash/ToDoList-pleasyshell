import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TTaskListContentState } from "../state/backlog-task-content.state";


export const TASKS_STATE_NAME = 'TasksPage';
const selectTasksState = createFeatureSelector<TTaskListContentState>(TASKS_STATE_NAME);


export const selectTasks = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.TasksList
);

export const selectSelectedTask = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.SelectedTask
);


export const selectModalAddTaskState = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.AddTaskModal
);

export const selectModalAddTask = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.AddTaskModal.ModalContent
);

export const selectTitleOfTask = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.DeleteTaskModal.ModalContent.TaskName
);

export const selectListOfTaskStatus = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.DeleteTaskModal.ModalContent.TaskStatus
);

export const selectListOfTaskDescription = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.DeleteTaskModal.ModalContent.Description
);


export const selectModalDeleteTaskState = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.DeleteTaskModal
);

export const selectModalDeleteTask = createSelector(

    selectTasksState,
    (state: TTaskListContentState) => state.DeleteTaskModal.ModalContent
);