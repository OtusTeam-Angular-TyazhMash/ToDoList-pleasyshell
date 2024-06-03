import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisableTypingDirective } from './disable-typing.directive';


@NgModule({
    declarations: [
        DisableTypingDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DisableTypingDirective
    ]
})

export class SharedDirectivesModule { }
