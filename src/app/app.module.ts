import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './module/nav-menu/nav-menu.component';

import { SharedComponentsModule } from './module/components/shared-components.module';
import { SharedUtilsModule } from './module/utils';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AddedTasksComponent,
  SelectedTaskComponent,
  ToDoListComponent,
  ToDoListFormComponent
} from './module/content';

import {
  FakeApiService,
  FilterService,
  ModalService,
  NoticeService,
  ToDoListService
} from './services';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ToDoListComponent,
    ToDoListFormComponent,
    AddedTasksComponent,
    SelectedTaskComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    SharedUtilsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ToDoListComponent, children: [{ path: ':id', component: SelectedTaskComponent }] },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [
    ToDoListService, NoticeService,
    ModalService, FilterService,
    FakeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
