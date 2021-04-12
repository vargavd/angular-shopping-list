import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../item/item.interface';

@Component({
    selector: 'vdsl-current-items-list',
    templateUrl: './current-items-list.component.html',
    styleUrls: ['./current-items-list.component.scss']
})
export class CurrentItemsListComponent implements OnInit {
    @Input() items: IItem[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
