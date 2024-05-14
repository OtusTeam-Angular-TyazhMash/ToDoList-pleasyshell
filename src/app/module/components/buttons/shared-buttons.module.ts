import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlternativeAddButtonComponent,
  CancellButtonComponent,
  DeleteButtonComponent,
  EditButtonComponent,
  ListButtonComponent,
  SaveButtonComponent
} from '.';



@NgModule({
  declarations: [
    DeleteButtonComponent,
    ListButtonComponent,
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
    ListButtonComponent,
    SaveButtonComponent,
    EditButtonComponent,
    CancellButtonComponent,
    AlternativeAddButtonComponent,
  ]
})
export class SharedButtonsModule { }
