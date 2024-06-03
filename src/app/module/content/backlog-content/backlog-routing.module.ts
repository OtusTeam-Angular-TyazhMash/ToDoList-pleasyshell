import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogContentComponent } from './backlog-content.component';
import { BacklogTaskViewerComponent } from './components/backlog-task-viewer/backlog-task-viewer.component';


const routes: Routes =
    [
        {
            path: '',
            component: BacklogContentComponent,
            children: [
                {
                    path: ':id',
                    component: BacklogTaskViewerComponent
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
