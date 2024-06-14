import {
    Component, EventEmitter,
    Input, Output
} from '@angular/core';

@Component({
    selector: 'title-input',
    templateUrl: './title-input.component.html'
})
export class TitleInputComponent {


    @Input() placeholder: string = '';
    @Input() value: unknown = '';

    @Output() valueChange = new EventEmitter<any>();


    protected onKeyUp(event: KeyboardEvent) {

        const input = event.target as HTMLInputElement;

        this.valueChange.emit(input.value);
        this.value = input.value;
    };

}
