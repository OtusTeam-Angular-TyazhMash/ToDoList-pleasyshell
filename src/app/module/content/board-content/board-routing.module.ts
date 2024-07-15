import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardContentComponent } from './board-content.component';


const routes: Routes =
    [
        {
            path: '',
            component: BoardContentComponent,
            data: { state: 'board' }
        }
    ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BoardRoutingModule { }
