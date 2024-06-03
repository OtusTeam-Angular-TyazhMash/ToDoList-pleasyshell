import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TTask } from 'src/app/module/content-types';
import { FakeApiService } from '../api/fake-api.service';
import { NoticeService } from '../notice/notice.service';

@Injectable()
export class BoardContentService {


    constructor(
        private api: FakeApiService,
        private router: Router,
        private notice: NoticeService
    ) {
        this.api.getTasksFromServer().subscribe((tasks: TTask[]) => {

            this.boardTable = tasks;
        });
    };


    private boardTable: TTask[] = [];


    public getBoardTasks(): TTask[] {

        return this.boardTable;
    };

};
