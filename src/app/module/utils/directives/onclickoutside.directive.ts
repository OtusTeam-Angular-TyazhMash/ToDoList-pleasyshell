import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToDoListService } from 'src/app/services';

@Directive({
  selector: '[onClickOutside]'
})
export class OnclickOutsideDirective {

  constructor(private elem: ElementRef, private service: ToDoListService) { }

  @HostListener('document:click', ['$event'])

  protected Click(event: MouseEvent) {

    const onClickOutSide = this.elem.nativeElement.contains(event.target);

    if (!onClickOutSide) {

      this.service.removeSelectedTask();
    }
  };

}
