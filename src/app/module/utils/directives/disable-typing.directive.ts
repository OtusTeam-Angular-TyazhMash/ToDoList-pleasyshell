import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[disableTyping]',
})
export class DisableTypingDirective {

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        event.preventDefault();
    }
}