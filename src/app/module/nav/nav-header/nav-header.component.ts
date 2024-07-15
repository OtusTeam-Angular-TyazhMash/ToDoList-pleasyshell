import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})

export class NavHeaderComponent {


    constructor(private translate: TranslateService) {

        this.translate.setDefaultLang('ru');
        this.translate.use('ru');
    };


    protected switchLangauge(langauge: string) {

        this.translate.use(langauge);
    };

};
