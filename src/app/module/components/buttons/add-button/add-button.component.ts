import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html'
})
export class AddButtonComponent {

  @Input() Title: string = '';

}
