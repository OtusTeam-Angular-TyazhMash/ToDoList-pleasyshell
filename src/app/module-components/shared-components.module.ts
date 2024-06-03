import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedButtonsModule } from "./buttons";
import { SharedNoticeModule } from "./notice-content";
import { SharedLoadingSpinnerModule } from "./loading-spinner";
import { SharedContentComponentsModule } from "./page-setters";
import { SharedModalsModule } from "./modals";

@NgModule({
    imports: [
        CommonModule,
        SharedButtonsModule,
        SharedNoticeModule,
        SharedLoadingSpinnerModule,
        SharedModalsModule
    ],
    exports: [
        SharedButtonsModule,
        SharedNoticeModule,
        SharedLoadingSpinnerModule,
        SharedContentComponentsModule,
        SharedModalsModule
    ],
})

export class SharedComponentsModule { }