import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './module/nav-menu/nav-menu.component';

import {
  AddedTasksComponent,
  ToDoListComponent,
  ToDoListFormComponent
} from './module/content';

import { ToDoListService } from './services';
import { SharedButtonsModule } from './module/components/shared-components.module';
import { ToolTipDirective } from './module/utils/directives/tooltip.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ToDoListComponent,
    ToDoListFormComponent,
    AddedTasksComponent,
    ToolTipDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedButtonsModule,
    RouterModule.forRoot([
      { path: '', component: ToDoListComponent, pathMatch: 'full' },
    ])
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
