import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IItem } from '../item/item.interface';
import { ItemsService } from '../items.service';

@Component({
    selector: 'vdsl-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
    @Input() items: IItem[] = [];
    @Input() currentItems: boolean = false;

    getItems() {
        return this.items.filter(item => item.current === this.currentItems);
    }

    constructor() { }

    ngOnInit(): void {

    }

}
