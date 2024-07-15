import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeComponent } from './notice.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        NoticeComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        NoticeComponent
    ]
})

export class SharedNoticeModule { }
