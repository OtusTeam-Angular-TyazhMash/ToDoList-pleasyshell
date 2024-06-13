import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInputComponent, TitleInputComponent } from '.';


@NgModule({
  declarations: [
    TitleInputComponent,
    ListInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleInputComponent,
    ListInputComponent
  ]
})
export class SharedFieldsModule { }
