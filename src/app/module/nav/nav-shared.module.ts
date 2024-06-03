import { NgModule } from "@angular/core";

import { NavHeaderComponent } from "./nav-header/nav-header.component";
import { NavSidebarComponent } from "./nav-sidebar/nav-sidebar.component";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TransitionNavSectionComponent } from "./nav-sidebar/components/transition-nav-section/transition-nav-section.component";


@NgModule({
    declarations: [
        NavHeaderComponent,
        NavSidebarComponent,
        TransitionNavSectionComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavHeaderComponent,
        NavSidebarComponent,
    ]
})

export class NavSharedModule { }