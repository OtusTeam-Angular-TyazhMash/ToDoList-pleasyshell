import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlternativeAddButtonComponent,
  CancellButtonComponent,
  DeleteButtonComponent,
  EditButtonComponent,
  SaveButtonComponent
} from '.';
import { EditButtonBigComponent } from './edit-button-big/edit-button-big.component';
import { DeleteButtonBigComponent } from './delete-button-big/delete-button-big.component';
import { BackButtonComponent } from './back-button/back-button.component';



@NgModule({
  declarations: [
    DeleteButtonComponent,
    SaveButtonComponent,
    EditButtonComponent,
    CancellButtonComponent,
    AlternativeAddButtonComponent,
    EditButtonBigComponent,
    DeleteButtonBigComponent,
    BackButtonComponent,
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
    EditButtonBigComponent,
    DeleteButtonBigComponent,
    BackButtonComponent
  ]
})
export class SharedButtonsModule { }
