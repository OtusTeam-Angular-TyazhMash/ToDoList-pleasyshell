import {
    Component, EventEmitter,
    Input, Output
} from '@angular/core';
import { openList } from 'src/utils/animations';


@Component({
    selector: 'list-input',
    templateUrl: './list-input.component.html',
    styleUrls: ['../selectable-fields-style.component.scss'],
    animations: [openList]
})

export class ListInputComponent {


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


    protected openList() {

        this.isOpen = true;
    };



};
