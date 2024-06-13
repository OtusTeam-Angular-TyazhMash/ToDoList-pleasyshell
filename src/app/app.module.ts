import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavSharedModule } from './module/nav/nav-shared.module';
import {
    BacklogContentService,
    BoardFilterService,
    NoticeService
} from './services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FakeApiService } from './services/api/fake-api.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NavSharedModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    bootstrap: [AppComponent],
    providers: [NoticeService, FakeApiService,
        BacklogContentService, BoardFilterService]
})

export class AppModule { }
