import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './module/nav-menu/nav-menu.component';

import { SharedButtonsModule } from './module/components/shared-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AddedTasksComponent,
  SelectedTaskComponent,
  ToDoListComponent,
  ToDoListFormComponent
} from './module/content';

import {
  
  OnclickOutsideDirective,
  ToolTipDirective
} from './module/utils';

import { ToDoListService } from './services';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ToDoListComponent,
    ToDoListFormComponent,
    AddedTasksComponent,
    SelectedTaskComponent,
    ToolTipDirective,
    OnclickOutsideDirective
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
