import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TBoardTasksListContentState } from "../state/board-tasks-content.state";

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