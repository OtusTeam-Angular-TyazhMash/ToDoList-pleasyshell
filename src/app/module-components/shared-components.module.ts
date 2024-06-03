import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedButtonsModule } from "./buttons";
import { SharedNoticeModule } from "./notice-content";
import { SharedLoadingSpinnerModule } from "./loading-spinner";
import { SharedContentComponentsModule } from "./page-setters";

@NgModule({
    imports: [
        CommonModule,
        SharedButtonsModule,
        SharedNoticeModule,
        SharedLoadingSpinnerModule
    ],
    exports: [
        SharedButtonsModule,
        SharedNoticeModule,
        SharedLoadingSpinnerModule,
        SharedContentComponentsModule
    ],
})

export class SharedComponentsModule { }