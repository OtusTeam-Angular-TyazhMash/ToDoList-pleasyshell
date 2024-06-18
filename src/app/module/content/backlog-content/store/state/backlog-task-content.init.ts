import { TTaskListContentState } from "..";


export const reset = () => {
    return {
        Id: 0,
        TaskName: '',
        Description: '',
        isShowDescription: false,
        TaskStatus: {
            Id: 0,
            Status: ''
        },
        id: ''
    }
};

export const statusReset = () => {
    return {
        Id: 0,
        Status: ''
    }
};

export const initTaskListContentState: TTaskListContentState = {
    TasksList: [],
    SelectedTask: reset(),
    DeleteTaskModal: {
        isOpen: false,
        ModalContent: reset()
    },
    AddTaskModal: {
        isOpen: false,
        isEdit: false,
        ModalContent: reset()
    }
};
