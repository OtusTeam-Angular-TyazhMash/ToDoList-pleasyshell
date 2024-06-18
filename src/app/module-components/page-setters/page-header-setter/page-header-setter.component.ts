import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header-setter',
  templateUrl: './page-header-setter.component.html',
  styleUrls: ['./page-header-setter.component.scss']
})
export class PageHeaderSetterComponent {

  @Input() title: string = '';
  @Input() buttonEvent: Function = () => { };
  @Input() isNeedButton: boolean = false;

}
