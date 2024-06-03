import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TTask } from 'src/app/module/content-types';

@Injectable()

export class FakeApiService {

    // json-server --watch tasks.json

    private url = 'http://localhost:3000/tasks';


    constructor(private http: HttpClient) { }


    public getTasksFromServer(): Observable<TTask[]> {

        return this.http.get<TTask[]>(this.url);
    };

    public updateTaskFromServer(task: TTask) {

        const updateUrl = `${this.url}/${task.id}`;

        const formattedTask: TTask = {

            Id: task.Id,
            TaskName: task.TaskName,
            Description: task.Description,
            TaskStatus: task.TaskStatus
        };

        return this.http.put(updateUrl, formattedTask);
    };

    public saveTaskOnServer(task: TTask) {

        return this.http.post(this.url, task);
    };

    public deleteTaskFromServerById(id: string) {

        const deleteUrl = `${this.url}/${id}`;

        return this.http.delete(deleteUrl);
    };
}
