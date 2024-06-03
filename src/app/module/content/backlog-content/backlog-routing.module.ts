import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogContentComponent } from './backlog-content.component';


const routes: Routes =
    [
        {
            path: '',
            component: BacklogContentComponent,
            children: [
                {
                    path: ':id',
                    component: BacklogContentComponent
                }
            ],
            data: { state: 'backlog' }
        }
    ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BacklogRoutingModule { }
