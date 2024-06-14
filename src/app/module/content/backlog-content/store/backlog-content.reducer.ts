import { createReducer, on, Action } from "@ngrx/store";
import {
    closeDeleteTaskModal, confirmDeleteTaskModal, loadTasks, loadTasksSuccess,
    openDeleteTaskModal, removeShowCurrentTask, showCurrentTask
} from "./backlog-content.actions";
import { initTaskListContentState, reset } from "./state/backlog-task-content.init";
import { TTaskListContentState } from "./state/backlog-task-content.state";


const _tasksReducer = createReducer(
    initTaskListContentState,

    on(loadTasks, (state) => state),
    on(loadTasksSuccess, (state, { loadedTasks }) => ({
        ...state,
        TasksList: loadedTasks.map(task => ({
            ...task, isShowDescription: false
        })),
    })),

    on(showCurrentTask, (state, { task }) => ({
        ...state,
        TasksList: state.TasksList.map(t => ({
            ...t,
            isShowDescription: t.Id === task.Id ? !t.isShowDescription : false
        })),
        SelectedTask: {
            ...task,
            isShowDescription: true
        }
    })),
    on(removeShowCurrentTask, (state) => ({
        ...state,
        SelectedTask: reset(),
        TasksList: state.TasksList.map(t => ({
            ...t,
            isShowDescription: false
        })),
    })),

    on(openDeleteTaskModal, (state, { task }) => ({
        ...state,
        DeleteTaskModal: {
            isOpen: true,
            Content: task
        }
    })),
    on(closeDeleteTaskModal, (state) => ({
        ...state,
        DeleteTaskModal: {
            isOpen: false,
            Content: reset()
        }
    })),
    on(confirmDeleteTaskModal, (state) => state)

);

export function tasksReducer(state: TTaskListContentState | undefined, action: Action) {

    return _tasksReducer(state, action);
};