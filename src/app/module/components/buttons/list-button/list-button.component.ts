import { Component, Input } from '@angular/core';
import { TTask } from 'src/app/module/content-types/task-types/task.type';
import { ToDoListService } from 'src/app/services';

@Component({
  selector: 'list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['../styles/button-styles.scss']
})
export class ListButtonComponent {

  constructor(private service: ToDoListService) { }

  @Input() taskOption!: TTask;

  protected showDescription(task: TTask) {

    const tasks = this.service.getTasks();

    tasks.forEach(x => {
      if (x !== task) {
        x.isShowDescription = false;
      }
    })
    task.isShowDescription = !task.isShowDescription;
  }
  
}
