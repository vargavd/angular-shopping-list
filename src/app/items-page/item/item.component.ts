import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'vdsl-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    @Output() inCurrentList: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    getRandomQuantity() {
        return Math.random() * 5;
    }

}
