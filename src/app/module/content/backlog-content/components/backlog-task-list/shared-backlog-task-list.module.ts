import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogTaskListComponent } from './backlog-task-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
    BacklogContentEffects, TASKS_STATE_NAME,
    tasksReducer
} from '../../store';


@NgModule({
    declarations: [
        BacklogTaskListComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature(TASKS_STATE_NAME, tasksReducer),
        EffectsModule.forFeature([BacklogContentEffects]),
    ],
    exports: [
        BacklogTaskListComponent
    ]
})
export class SharedBacklogTaskListModule { }
