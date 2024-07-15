import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from '.';
import { SharedButtonsModule } from '../buttons';
import { FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/utils/directives';
import { ModalDeleteTaskComponent } from './modal-delete-task/modal-delete-task.component';
import { SharedFieldsModule } from '../fields';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        ModalTaskComponent,
        ModalDeleteTaskComponent,
    ],
    imports: [
        CommonModule,
        SharedButtonsModule,
        FormsModule,
        SharedDirectivesModule,
        SharedFieldsModule,
        TranslateModule
    ],
    exports: [
        ModalTaskComponent,
        ModalDeleteTaskComponent,
    ]
})
export class SharedModalsModule { }
