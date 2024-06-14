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

export const initTaskListContentState: TTaskListContentState = {
    TasksList: [],
    SelectedTask: reset(),
    DeleteTaskModal: {
        isOpen: false,
        Content: reset()
    }
};
