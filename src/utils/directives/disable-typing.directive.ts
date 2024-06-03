import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[disableTyping]',
})
export class DisableTypingDirective {

    @HostListener('keydown', ['$event'])

    protected onKeyDown(event: KeyboardEvent) {
        event.preventDefault();
    }
}