import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../item/item.interface';

@Component({
    selector: 'vdsl-every-items-list',
    templateUrl: './every-items-list.component.html',
    styleUrls: ['./every-items-list.component.scss']
})
export class EveryItemsListComponent implements OnInit {
    @Input() items: IItem[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
