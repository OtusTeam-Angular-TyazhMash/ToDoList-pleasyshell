import { Injectable } from "@angular/core";
import { TTask } from "src/app/module/content-types/task-types/task.type";

@Injectable()

export class ToDoListService {

    public LocalAddedTasks: TTask[] = [
        {
            Id: 1,
            TaskName: 'Помыть посуду'
        },
        {
            Id: 2,
            TaskName: 'Приготовить ужин'
        },
        {
            Id: 3,
            TaskName: 'Погулять в парке'
        },
        {
            Id: 4,
            TaskName: 'Поговорить с Ларисой'
        },
        {
            Id: 5,
            TaskName: 'Работать'
        }
    ];
}  