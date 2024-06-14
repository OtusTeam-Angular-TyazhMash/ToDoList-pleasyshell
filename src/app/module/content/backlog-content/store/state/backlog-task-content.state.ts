export type TTaskListState = {
    Content: TTaskListContentState
}

export type TTaskListContentState = {
    TasksList: TTask[]
    SelectedTask: TTask
    DeleteTaskModal: TDeleteTaskModal
}

export type TDeleteTaskModal = {
    isOpen: boolean,
    Content: TTask
}

export type TStatus = {
    Id: number,
    Status: string
}

export type TTask = {
    Id: number,
    TaskName: string,
    Description: string,
    isShowDescription?: boolean,
    TaskStatus: TStatus,
    id?: string
}


