import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from '.';
import { SharedButtonsModule } from '../buttons';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalTaskComponent
  ],
  imports: [
    CommonModule,
    SharedButtonsModule,
    FormsModule
  ],
  exports: [
    ModalTaskComponent
  ]
})
export class SharedModalsModule { }
