import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'backlog',
        pathMatch: 'full'
    },
    {
        path: 'backlog',
        loadChildren: () => import('./module/content/backlog-content/shared-backlog.module').then(m => m.SharedBacklogModule)
    },
    {
        path: '**',
        redirectTo: 'boardtasks',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
