import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../item/item.interface';

@Component({
    selector: 'vdsl-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
    @Input() items: IItem[] = [];
    @Input() currentItems: boolean = false;

    @Output() openHistoryModalEvent = new EventEmitter<IItem>();

    getItems() {
        return this.items.filter(item => item.current === this.currentItems);
    }

    openHistoryModal(item: IItem) {
        this.openHistoryModalEvent.emit(item);
    }

    constructor() { }
}
