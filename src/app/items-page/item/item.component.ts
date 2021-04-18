import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IItem } from './item.interface';

@Component({
    selector: 'vdsl-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    public quantity: number = 1;

    // infos from input "attributes"
    @Input() inCurrentList: boolean = false;
    @Input() item: IItem = { id: 0, name: "", current: false };

    @Output() openModalEvent = new EventEmitter<IItem>();

    // events
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    changeCurrentState() {
        this.item.current = !this.item.current;
    }
    displayModal() {
        this.openModalEvent.emit(this.item);
    }

    constructor() { }

}
