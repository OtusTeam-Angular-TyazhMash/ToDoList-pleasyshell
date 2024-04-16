import { NgModule } from "@angular/core";
import * as Button from './buttons-index';

@NgModule({
    declarations: [Button.AddButtonComponent],
    exports: [Button.AddButtonComponent]
})

export class SharedButtonsModule { }