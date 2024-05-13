import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedButtonsModule } from "./buttons";
import { SharedNoticeModule } from "./notice-content";
import { SharedModalsModule } from "./modals";
import { SharedLoadingSpinnerModule } from "./loading-spinner";

@NgModule({
    imports: [
        CommonModule,
        SharedButtonsModule,
        SharedNoticeModule,
        SharedModalsModule,
        SharedLoadingSpinnerModule
    ],
    exports: [
        SharedButtonsModule,
        SharedNoticeModule,
        SharedModalsModule,
        SharedLoadingSpinnerModule
    ],
})

export class SharedComponentsModule { }