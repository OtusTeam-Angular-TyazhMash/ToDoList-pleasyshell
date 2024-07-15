import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'board',
        pathMatch: 'full'
    },
    {
        path: 'board',
        loadChildren: () => import('./module/content/board-content/shared-board.module').then(m => m.SharedBoardModule)
    },
    {
        path: 'backlog',
        loadChildren: () => import('./module/content/backlog-content/shared-backlog.module').then(m => m.SharedBacklogModule)
    },
    {
        path: '**',
        redirectTo: 'board',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
