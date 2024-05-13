import { Component } from '@angular/core';
import { ToDoListService } from 'src/app/services';

@Component({
  selector: 'selected-task',
  templateUrl: './selected-task.component.html',
  styleUrls: ['./selected-task.component.scss'],
})
export class SelectedTaskComponent {


  constructor(protected service: ToDoListService) { }


  protected getTask() {

    return this.service.getSelectedTask();
  }

  protected cancellTaskWatch() {

    this.service.removeSelectedTask();
  }
}
