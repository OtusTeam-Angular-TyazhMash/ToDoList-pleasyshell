import { Component } from '@angular/core';
import { routerTransition } from 'src/utils/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [routerTransition],
})

export class AppComponent {


    title = 'app';


    protected getState(outlet: any) {

        return outlet.activatedRouteData.state;
    };
    
}
