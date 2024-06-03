export const resetInitTask = () => {
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
    };
}