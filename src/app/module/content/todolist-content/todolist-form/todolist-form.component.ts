import { Component, OnInit } from "@angular/core";
import {
    NoticeService,
    ToDoListService
} from "src/app/services";

@Component({
    selector: 'todolist-form',
    templateUrl: './todolist-form.component.html',
    styleUrls: ['./todolist-form.component.scss']
})

export class ToDoListFormComponent implements OnInit {

    constructor(protected service: ToDoListService, private notice: NoticeService) { }


    protected isLoading: boolean = false;


    ngOnInit() {
        setTimeout(() => {
            this.isLoading = true;
        }, 500)
    };

    protected openModal() {

        this.service.OpenTaskModal();
    }
}