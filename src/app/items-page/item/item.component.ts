import { Component, Input, OnInit } from '@angular/core';
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

    // events
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    constructor() { }

}
