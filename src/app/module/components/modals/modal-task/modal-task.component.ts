import { Component } from '@angular/core';
import { TTask } from 'src/app/module/content-types';
import { openWindow } from 'src/app/module/utils/animations';
import {
  NoticeService,
  ToDoListService
} from 'src/app/services';

@Component({
  selector: 'modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss',
    '../../styles/button-styles.scss'],
  animations: [openWindow]
})

export class ModalTaskComponent {

  constructor(protected service: ToDoListService, private notice: NoticeService) { }


  protected dataTask: TTask = this.getData();


  protected getData(): TTask {

    return this.service.getDataForModalTask();
  };

  protected modalState(): boolean {

    return this.service.getTaskModalState();
  }

  protected sendTaskName(event: KeyboardEvent) {

    const { value } = event.target as HTMLInputElement;

    this.getData().TaskName = value;
  };

  protected sendDescription(event: KeyboardEvent) {

    const { value } = event.target as HTMLInputElement;

    this.getData().Description = value;
  };

  protected checkTaskValid(task: TTask) {

    const notice = this.notice;
    const service = this.service;

    this.getData().TaskName !== '' ? service.checkMode(task) : notice.warning('Введите название задачи!');
  };

  protected Close() {

    this.service.closeTaskModal();
  };

}
