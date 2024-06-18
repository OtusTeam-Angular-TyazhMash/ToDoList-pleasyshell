import {
    Component, ElementRef, EventEmitter,
    Input, Output
} from '@angular/core';
import { openList } from 'src/utils/animations';


@Component({
    selector: 'list-input',
    templateUrl: './list-input.component.html',
    styleUrls: ['../selectable-fields-style.component.scss'],
    animations: [openList],
    host: {
        '(document:click)': 'onClickOutSide($event)'
    },
})

export class ListInputComponent {


    constructor(
        private elem: ElementRef
    ) { }


    @Input() placeholder: string = '';
    @Input() value: any = '';
    @Input() tableRow: any = [];

    @Output() valueChange = new EventEmitter<any>();


    protected isOpen: boolean = false;


    protected listSelected() {

        return this.isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    };


    protected onClickRow(itemRow: any) {

        this.valueChange.emit(itemRow);
        this.value = itemRow;

        this.isOpen = false;
    };

    protected onClickOutSide(event: Event) {

        if (!this.elem.nativeElement.contains(event.target)) {

            this.isOpen = false;
        };
    };


    protected openList() {

        this.isOpen = true;
    };



};
