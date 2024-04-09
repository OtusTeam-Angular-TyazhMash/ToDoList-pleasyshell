import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './module/nav-menu/nav-menu.component';

import { ToDoListComponent } from './module/content/todolist-content/todolist.component';
import { ToDoListFormComponent } from './module/content/todolist-content/todolist-form/todolist-form.component';
import { AddedTasksComponent } from './module/content/todolist-content/todolist-form/components/added-tasks/added-tasks.component';

import { ToDoListService } from './services';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ToDoListComponent,
    ToDoListFormComponent,
    AddedTasksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ToDoListComponent, pathMatch: 'full' },
    ])
  ],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
