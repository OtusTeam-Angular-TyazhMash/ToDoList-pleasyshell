import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleInputComponent } from './title-input/title-input.component';
import { ListInputComponent } from './selectable-fields/list-input/list-input.component';
import { SharedDirectivesModule } from 'src/utils/directives';
import { TextAreaComponent } from './text-area/text-area.component';



@NgModule({
  declarations: [
    TitleInputComponent,
    ListInputComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    SharedDirectivesModule
  ],
  exports: [
    TitleInputComponent,
    ListInputComponent,
    TextAreaComponent
  ]
})
export class SharedFieldsModule { }
