export enum TasksListActions {
    LOAD_TASKS = '[TasksList] load tasks',
    LOAD_TASKS_SUCCESS = '[TasksList] load tasks success',
    UPDATE_TASKS = '[TasksList] update tasks',
    UPDATE_TASKS_SUCCESS = '[TasksList] update tasks success',
};

export enum SelectedTaskActions {
    SHOW_CURRENT_TASK = '[SelectedTask] show current task',
    REMOVE_SHOW_CURRENT_TASK = '[SelectedTask] remove show current task',
};

export enum AddTaskModalActions {
    OPEN_ADD_TASK_MODAL = '[AddTaskModal] open add task modal',
    CLOSE_ADD_TASK_MODAL = '[AddTaskModal] close add task modal',
    SET_FIELD_TASKNAME = '[AddTaskModal] update taskname field value',
    SET_FIELD_TASK_STATUS = '[AddTaskModal] update task status field value',
    SET_FIELD_TASK_DESCRIPTION = '[AddTaskModal] update task description field value',
    CONFIRM_ADD_TASK = '[AddTaskModal] confirm add task',
    ADD_TASK_SUCCESS = '[AddTaskModal] add task success'
};

export enum DeleteTaskModalActions {
    OPEN_DELETE_TASK_MODAL = '[DeleteTaskModal] open delete task modal',
    CLOSE_DELETE_TASK_MODAL = '[DeleteTaskModal] close delete task modal',
    CONFIRM_DELETE_TASK = '[DeleteTaskModal] confirm delete task',
    DELETE_TASK_SUCCESS = '[DeleteTaskModal]  delete task success'
};