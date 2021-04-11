import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'vdsl-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    public quantity: number = 1;

    @Input() inCurrentList: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

}
