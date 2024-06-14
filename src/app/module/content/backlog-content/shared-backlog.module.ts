import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogContentComponent } from './backlog-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { BacklogRoutingModule } from './backlog-routing.module';

import {
    BacklogTaskViewerComponent,
    SharedBacklogTaskListModule
} from '.';

import { SharedDirectivesModule } from 'src/utils/directives';
import { BacklogAddModalService, BacklogDeleteModalService } from 'src/app/services';


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
    providers: [BacklogAddModalService, BacklogDeleteModalService]
})

export class SharedBacklogModule { }
