import { TBoardTasksListContentState } from "./board-tasks-content.state";

export const filterReset = () => {
    return {
        Id: 0,
        FilterName: 'Все'
    }
};

export const initBoardTasksListContentState: TBoardTasksListContentState = {
    BoardTasksList: [],
    FilterByStatus: filterReset()
};