import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContentComponent } from './board-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { SharedDirectivesModule } from 'src/utils/directives';
import { BoardRoutingModule } from './board-routing.module';
import { BoardTaskTableComponent } from './components/board-task-table/board-task-table.component';
import { FormsModule } from '@angular/forms';
import { BoardContentService } from 'src/app/services/board-services/board-content.service';


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
        FormsModule
    ],
    providers: [BoardContentService]
})
export class SharedBoardModule { }
