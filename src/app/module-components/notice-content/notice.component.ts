import { Component } from '@angular/core';
import { NoticeService } from 'src/app/services';
import { Notice, openWindow } from 'src/utils/animations';


@Component({
    selector: 'notice',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.scss',
        '../styles/button-styles.scss'],
    animations: [openWindow, Notice]
})

export class NoticeComponent {


    constructor(
        protected noticeService: NoticeService
    ) { }


    protected showNotice() {

        return this.noticeService.getNotice();
    };

};
