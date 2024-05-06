import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnclickOutsideDirective } from './onclickoutside.directive';
import { ToolTipDirective } from './tooltip.directive';


@NgModule({
  declarations: [
    OnclickOutsideDirective,
    ToolTipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnclickOutsideDirective,
    ToolTipDirective
  ]
})
export class SharedDirectivesModule { }
