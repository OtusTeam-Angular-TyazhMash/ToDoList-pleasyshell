import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[NumericOnly]'
})
export class NumericOnlyDirective {

    constructor(
        private el: ElementRef
    ) { }

    @HostListener('input', ['$event']) OnInput(event: KeyboardEvent) {

        const val = this.el.nativeElement.value;

        this.el.nativeElement.value = val.replace(/[^0-9]*/g, '');

        if(val !== this.el.nativeElement.value) {

            event.stopPropagation();
        };
    };
}
