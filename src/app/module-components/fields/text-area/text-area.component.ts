import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'text-area',
    templateUrl: './text-area.component.html'
})

export class TextAreaComponent {


    @Input() placeholder: string = '';
    @Input() value: unknown = '';

    @Output() valueChange = new EventEmitter<any>();


    protected onKeyUp(event: KeyboardEvent) {

        const input = event.target as HTMLInputElement;

        this.valueChange.emit(input.value);
        this.value = input.value;
    };
    
}
