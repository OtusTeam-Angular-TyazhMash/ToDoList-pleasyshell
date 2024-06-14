import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from '.';
import { SharedButtonsModule } from '../buttons';
import { FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/utils/directives';
import { ModalDeleteTaskComponent } from './modal-delete-task/modal-delete-task.component';


@NgModule({
  declarations: [
    ModalTaskComponent,
    ModalDeleteTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedButtonsModule,
    FormsModule,
    SharedDirectivesModule
  ],
  exports: [
    ModalTaskComponent,
    ModalDeleteTaskComponent,
  ]
})
export class SharedModalsModule { }
