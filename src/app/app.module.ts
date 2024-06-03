import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavSharedModule } from './module/nav/nav-shared.module';
import {
    BacklogContentService,
    NoticeService
} from './services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FakeApiService } from './services/api/fake-api.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NavSharedModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent],
    providers: [NoticeService, FakeApiService, BacklogContentService]
})

export class AppModule { }
