import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SaveButtonComponent } from "./buttons/save-button/save-button.component";
import { DeleteButtonComponent } from './buttons/delete-button/delete-button.component';
import { ListButtonComponent } from './buttons/list-button/list-button.component';

@NgModule({
    declarations: [
        SaveButtonComponent,
        DeleteButtonComponent,
        ListButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SaveButtonComponent,
        DeleteButtonComponent,
        ListButtonComponent
    ]
})

export class SharedButtonsModule { }