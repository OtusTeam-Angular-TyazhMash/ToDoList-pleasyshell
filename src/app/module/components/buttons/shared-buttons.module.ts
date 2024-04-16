import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SaveButtonComponent } from "./save-button/save-button.component";
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
    declarations: [SaveButtonComponent, DeleteButtonComponent],
    imports: [CommonModule],
    exports: [SaveButtonComponent, DeleteButtonComponent]
})

export class SharedButtonsModule { }