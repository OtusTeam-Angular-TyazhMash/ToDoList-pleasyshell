import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogContentComponent } from './backlog-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { BacklogRoutingModule } from './backlog-routing.module';

import {
    BacklogTaskListComponent,
    BacklogTaskViewerComponent
} from '.';


@NgModule({
    declarations: [
        BacklogContentComponent,
        BacklogTaskListComponent,
        BacklogTaskViewerComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        BacklogRoutingModule
    ]
})

export class SharedBacklogModule { }
