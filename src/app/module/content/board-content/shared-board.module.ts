import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContentComponent } from './board-content.component';
import { SharedComponentsModule } from 'src/app/module-components/shared-components.module';
import { SharedDirectivesModule } from 'src/utils/directives';
import { BoardRoutingModule } from './board-routing.module';



@NgModule({
    declarations: [
        BoardContentComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        SharedDirectivesModule,
        BoardRoutingModule
    ]
})
export class SharedBoardModule { }
