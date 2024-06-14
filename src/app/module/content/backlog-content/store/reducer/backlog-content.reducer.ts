import { createReducer, on, Action } from "@ngrx/store";
import {
    loadTasks, loadTasksSuccess, showCurrentTask, removeShowCurrentTask,
    openAddTaskModal, closeAddTaskModal, setFieldTaskName,
    setFieldTaskStatus, setFieldTaskDescription, openDeleteTaskModal,
    closeDeleteTaskModal, confirmDeleteTaskModal,
    confirmSaveTask
} from "../actions/backlog-content.actions";
import { initTaskListContentState, reset } from "../state/backlog-task-content.init";
import { TTaskListContentState } from "../state/backlog-task-content.state";



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

    on(openAddTaskModal, (state, { task }) => ({
        ...state,
        AddTaskModal: {
            isOpen: true,
            isEdit: task !== undefined && task.Id !== 0,
            ModalContent: task !== undefined ? task : reset()
        }
    })),
    on(closeAddTaskModal, (state) => ({
        ...state,
        AddTaskModal: {
            isOpen: false,
            isEdit: false,
            ModalContent: reset()
        }
    })),
    on(setFieldTaskName, (state, { taskname }) => ({
        ...state,
        AddTaskModal: {
            ...state.AddTaskModal,
            ModalContent: {
                ...state.AddTaskModal.ModalContent,
                TaskName: taskname
            }
        }
    })),
    on(setFieldTaskStatus, (state, { status }) => ({
        ...state,
        AddTaskModal: {
            ...state.AddTaskModal,
            ModalContent: {
                ...state.AddTaskModal.ModalContent,
                TaskStatus: status
            }
        }
    })),
    on(setFieldTaskDescription, (state, { description }) => ({
        ...state,
        AddTaskModal: {
            ...state.AddTaskModal,
            ModalContent: {
                ...state.AddTaskModal.ModalContent,
                Description: description
            }
        }
    })),
    on(confirmSaveTask, (state, { task }) => ({
        ...state,
        TasksList: [
            ...state.TasksList,
            task
        ]
    })),

    on(openDeleteTaskModal, (state, { task }) => ({
        ...state,
        DeleteTaskModal: {
            isOpen: true,
            ModalContent: task
        }
    })),
    on(closeDeleteTaskModal, (state) => ({
        ...state,
        DeleteTaskModal: {
            isOpen: false,
            ModalContent: reset()
        }
    })),
    on(confirmDeleteTaskModal, (state) => state)

);

export function tasksReducer(state: TTaskListContentState | undefined, action: Action) {

    return _tasksReducer(state, action);
};