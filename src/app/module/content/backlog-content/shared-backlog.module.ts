import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogContentComponent } from './backlog-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { BacklogRoutingModule } from './backlog-routing.module';

import {
    BacklogTaskListComponent,
    BacklogTaskViewerComponent,
    SharedBacklogTaskListModule
} from '.';

import { BacklogModalService } from 'src/app/services';
import { SharedDirectivesModule } from 'src/utils/directives';


@NgModule({
    declarations: [
        BacklogContentComponent,
        BacklogTaskViewerComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        SharedBacklogTaskListModule,
        BacklogRoutingModule,
        SharedDirectivesModule
    ],
    providers: [BacklogModalService]
})

export class SharedBacklogModule { }
