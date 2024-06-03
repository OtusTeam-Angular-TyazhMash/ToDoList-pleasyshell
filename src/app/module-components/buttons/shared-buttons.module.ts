import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlternativeAddButtonComponent,
  CancellButtonComponent,
  DeleteButtonComponent,
  EditButtonComponent,
  SaveButtonComponent
} from '.';



@NgModule({
  declarations: [
    DeleteButtonComponent,
    SaveButtonComponent,
    EditButtonComponent,
    CancellButtonComponent,
    AlternativeAddButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeleteButtonComponent,
    SaveButtonComponent,
    EditButtonComponent,
    CancellButtonComponent,
    AlternativeAddButtonComponent,
  ]
})
export class SharedButtonsModule { }
