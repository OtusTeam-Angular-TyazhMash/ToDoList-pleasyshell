import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnclickOutsideDirective } from './onclickoutside.directive';
import { ToolTipDirective } from './tooltip.directive';
import { DisableTypingDirective } from './disable-typing.directive';


@NgModule({
  declarations: [
    OnclickOutsideDirective,
    ToolTipDirective,
    DisableTypingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnclickOutsideDirective,
    ToolTipDirective,
    DisableTypingDirective
  ]
})
export class SharedDirectivesModule { }
