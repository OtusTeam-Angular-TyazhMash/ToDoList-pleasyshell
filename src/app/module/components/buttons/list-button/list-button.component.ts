import { Component, Input } from '@angular/core';
import { ToDoListService } from 'src/app/services';

@Component({
  selector: 'list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['../../styles/button-styles.scss']
})

export class ListButtonComponent {

  constructor(private service: ToDoListService) { }

}
