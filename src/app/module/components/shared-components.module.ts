import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedButtonsModule } from "./buttons";
import { SharedNoticeModule } from "./notice-content";
import { SharedModalsModule } from "./modals";

@NgModule({
    imports: [
        CommonModule,
        SharedButtonsModule,
        SharedNoticeModule,
        SharedModalsModule
    ],
    exports: [
        SharedButtonsModule,
        SharedNoticeModule,
        SharedModalsModule
    ]
})

export class SharedComponentsModule { }