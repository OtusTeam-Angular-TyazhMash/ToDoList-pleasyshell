import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TBoardTasksListContentState, TFilter } from "../state/board-tasks-content.state";

export const BOARD_STATE_NAME = 'BoardTasksPage';
const selectBoardTasksState = createFeatureSelector<TBoardTasksListContentState>(BOARD_STATE_NAME);


export const selectBoardTasks = createSelector(

    selectBoardTasksState,
    (state: TBoardTasksListContentState) => state.BoardTasksList
);

export const selectFilterData = createSelector(

    selectBoardTasksState,
    (state: TBoardTasksListContentState) => state.FilterByStatus
);

export const selectFilteredBoardTasks = createSelector(

    selectBoardTasksState,
    selectFilterData,
    (state: TBoardTasksListContentState, filter: TFilter) => {

        let filteredTasks = state.BoardTasksList;

        if (filter.Id !== 0) {

            return filteredTasks.filter(task =>
                task.TaskStatus.Id === filter.Id
            );
        } else {

            return filteredTasks;
        };
    }
);