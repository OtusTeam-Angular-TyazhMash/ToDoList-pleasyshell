export type TTaskListState = {
    Content: TTaskListContentState
}

export type TTaskListContentState = {
    TasksList: TTask[]
    SelectedTask: TTask
    DeleteTaskModal: TDeleteTaskModal
    AddTaskModal: TAddTaskModal
}

export type TDeleteTaskModal = {
    isOpen: boolean,
    ModalContent: TTask
}

export type TAddTaskModal = {
    isOpen: boolean,
    isEdit: boolean,
    isCheckedForValid: boolean,
    ModalContent: TTask
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


