import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContentComponent } from './board-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { SharedDirectivesModule } from 'src/utils/directives';
import { BoardRoutingModule } from './board-routing.module';
import { BoardTaskTableComponent } from './components/board-task-table/board-task-table.component';
import { FormsModule } from '@angular/forms';
import { BoardContentService } from 'src/app/services/board-services/board-content.service';
import { SharedFieldsModule } from 'src/app/module-components/fields';
import { BOARD_STATE_NAME } from './store';
import { StoreModule } from '@ngrx/store';
import { boardReducer } from './store/reducer/board-content.reducer';
import { BoardContentEffects } from './store/effects/board-content.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
    declarations: [
        BoardContentComponent,
        BoardTaskTableComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        SharedDirectivesModule,
        BoardRoutingModule,
        FormsModule,
        SharedFieldsModule,
        StoreModule.forFeature(BOARD_STATE_NAME, boardReducer),
        EffectsModule.forFeature([BoardContentEffects]),
    ],
    providers: [BoardContentService]
})
export class SharedBoardModule { }
