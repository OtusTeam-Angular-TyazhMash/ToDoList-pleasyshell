import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirectivesModule } from './directives';



@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesModule
  ],
  exports: [
    SharedDirectivesModule
  ]
})
export class SharedUtilsModule { }
