import { createReducer, on, Action } from "@ngrx/store";
import { loadTasks, loadTasksSuccess, showCurrentTask } from "../actions/backlog-task-list.actions";
import { initTaskListContentState } from "../state/backlog-task-content.init";
import { TTaskListContentState } from "../state/backlog-task-content.state";


const _tasksReducer = createReducer(
    initTaskListContentState,

    on(loadTasks, (state) => state),
    on(loadTasksSuccess, (state, { tasks }) => ({
        ...state,
        TasksList: tasks.map(task => ({
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
    }))

);

export function tasksReducer(state: TTaskListContentState | undefined, action: Action) {

    return _tasksReducer(state, action);
};