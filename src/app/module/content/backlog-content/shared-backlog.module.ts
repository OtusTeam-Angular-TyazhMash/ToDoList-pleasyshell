import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogContentComponent } from './backlog-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { BacklogRoutingModule } from './backlog-routing.module';

import {
    BacklogTaskListComponent,
    BacklogTaskViewerComponent
} from '.';

import { SharedDirectivesModule } from 'src/utils/directives';
import { BacklogAddModalService, BacklogDeleteModalService } from 'src/app/services';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TASKS_STATE_NAME, tasksReducer } from './store';
import { BacklogContentEffects } from './store/effects/backlog-content.effects';


@NgModule({
    declarations: [
        BacklogContentComponent,
        BacklogTaskViewerComponent,
        BacklogTaskListComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        BacklogRoutingModule,
        SharedDirectivesModule,
        StoreModule.forFeature(TASKS_STATE_NAME, tasksReducer),
        EffectsModule.forFeature([BacklogContentEffects]),
    ],
    providers: [BacklogAddModalService, BacklogDeleteModalService]
})

export class SharedBacklogModule { }
