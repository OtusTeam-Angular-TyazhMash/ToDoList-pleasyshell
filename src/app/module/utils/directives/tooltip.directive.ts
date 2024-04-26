import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[toolTip]'
})

export class ToolTipDirective {

    constructor(private elementRef: ElementRef) { }

    @Input() title: string = '';

    @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.title = this.title;
    }
}