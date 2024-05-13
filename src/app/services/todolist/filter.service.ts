import { Injectable } from '@angular/core';
import { initFilter } from 'src/app/module/content-types';
import { TFilter, TFilterTask } from 'src/app/module/content-types/task-types/filter.type';

@Injectable()

export class FilterService {


    private filter: TFilter = initFilter();
    private filterByStatus: string = 'Все';


    public getFilterStatus(): boolean {

        return this.filter.isOpen;
    };

    public getFilterContent(): TFilterTask[] {

        return this.filter.FilterContent;
    };


    public getFilterValue(): string {

        return this.filterByStatus;
    };

    public openFilter(): boolean {

        return this.filter.isOpen = true;
    };

    public setTaskFilter(status: string) {

        this.filterByStatus = status;
        return this.filter.isOpen = false;
    };

    public listStyle(): string {

        return this.filter.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    };

}