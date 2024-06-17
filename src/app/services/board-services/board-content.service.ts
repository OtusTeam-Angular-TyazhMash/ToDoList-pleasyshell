import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FakeApiService } from '../api/fake-api.service';
import { BoardFilterService } from './board-filter.service';
import { BacklogContentService } from '../backlog-services/backlog-content.service';

@Injectable()

export class BoardContentService {


    // constructor(
    //     private api: FakeApiService,
    //     private boardFilterService: BoardFilterService,
    //     private backlogContentService: BacklogContentService,
    //     private router: Router
    // ) {
    //     this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {

    //         this.boardTable = tasks;
    //     });
    // };


    // private boardTable: TTask[] = [];


    // public filterData(): TTask[] {

    //     // const filterVal = this.boardFilterService.getFilterValue();
    //     // const tasks = this.boardTable;

    //     // if (filterVal === 'Все') {

    //     //     return tasks;

    //     // } else if (filterVal === 'Выполнены') {

    //     //     return tasks.filter(task => task.TaskStatus.Id !== 1);

    //     // } else if (filterVal === 'Не выполнены') {

    //     //     return tasks.filter(task => task.TaskStatus.Id === 1);

    //     // } else {

    //     //     return tasks;
    //     // };
    // };


    // public openTaskDetail(task: TTask) {

    //     // this.backlogContentService.setDetailTask(task);
    //     // this.router.navigate(['backlog', task.Id]);
    // };

};
