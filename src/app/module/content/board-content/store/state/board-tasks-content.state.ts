import { TTask } from "../../../backlog-content/store"

export type TBoardTasksListState = {
    Content: TBoardTasksListContentState
}

export type TBoardTasksListContentState = {
    BoardTasksList: TTask[]
    FilterByStatus: TFilter
}

export type TFilter = {
    Id: number,
    FilterName: string
}