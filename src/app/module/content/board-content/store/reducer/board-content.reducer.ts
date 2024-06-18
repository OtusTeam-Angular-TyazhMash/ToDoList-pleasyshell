import { Action, createReducer, on } from "@ngrx/store";
import { initBoardTasksListContentState } from "../state/board-task-content.init";
import { defaultFilteredTasksOnLoad, loadTasksForBoardSuccess, setFieldTaskStatus } from "../actions/board-content.actions";
import { TBoardTasksListContentState } from "../state/board-tasks-content.state";

const _boardReducer = createReducer(
    initBoardTasksListContentState,

    on(loadTasksForBoardSuccess, (state, { tasks }) => ({
        ...state,
        BoardTasksList: tasks
    })),
    on(defaultFilteredTasksOnLoad, (state) => ({
        ...state,
        BoardTasksList: state.BoardTasksList
    })),
    on(setFieldTaskStatus, (state, { filter }) => ({
        ...state,
        FilterByStatus: filter
    }))

);

// let filteredTasks = state.BoardTasksList;

//         if (filter.Id !== 0) {

//             filteredTasks = state.BoardTasksList.filter(task =>
//                 task.TaskStatus.Id === filter.Id
//             );

//         };

export function boardReducer(state: TBoardTasksListContentState | undefined, action: Action) {

    return _boardReducer(state, action);
};