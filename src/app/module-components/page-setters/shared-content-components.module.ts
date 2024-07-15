import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PageFooterSetterComponent,
  PageHeaderSetterComponent
} from '.';
import { SharedButtonsModule } from '../buttons';


@NgModule({
  declarations: [
    PageHeaderSetterComponent,
    PageFooterSetterComponent
  ],
  imports: [
    CommonModule,
    SharedButtonsModule
  ],
  exports: [
    PageHeaderSetterComponent,
    PageFooterSetterComponent
  ]
})
export class SharedContentComponentsModule { }
