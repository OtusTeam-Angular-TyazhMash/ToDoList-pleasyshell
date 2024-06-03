import { Component, Input } from '@angular/core';

@Component({
  selector: 'save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['../../styles/button-styles.scss']
})
export class SaveButtonComponent {

  @Input() title: string = '';
  @Input() isDisable: boolean = false;

}
