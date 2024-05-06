import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from '.';
import { SharedButtonsModule } from '../buttons';


@NgModule({
  declarations: [
    ModalTaskComponent
  ],
  imports: [
    CommonModule,
    SharedButtonsModule
  ],
  exports: [
    ModalTaskComponent
  ]
})
export class SharedModalsModule { }
