import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTaskComponent } from '.';
import { SharedButtonsModule } from '../buttons';
import { FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/utils/directives';


@NgModule({
  declarations: [
    ModalTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedButtonsModule,
    FormsModule,
    SharedDirectivesModule
  ],
  exports: [
    ModalTaskComponent
  ]
})
export class SharedModalsModule { }
