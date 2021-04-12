import { Component, OnInit } from '@angular/core';
import { IItem } from './item/item.interface';

@Component({
    selector: 'vdsl-items-page',
    templateUrl: './items-page.component.html',
    styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent implements OnInit {
    private items: IItem[] = [
        {
            "id": 1,
            "name": "bread"
        },
        {
            "id": 2,
            "name": "milk"
        },
        {
            "id": 3,
            "name": "orange"
        },
        {
            "id": 4,
            "name": "cake"
        },
        {
            "id": 5,
            "name": "mineral water"
        },
        {
            "id": 6,
            "name": "juice"
        },
        {
            "id": 7,
            "name": "tea"
        },
        {
            "id": 8,
            "name": "paper"
        },
        {
            "id": 9,
            "name": "cheese"
        },
        {
            "id": 9,
            "name": "chocolate"
        }
    ];

    getAllItems(): IItem[] {
        return this.items;
    }
    getCurrentItems(): IItem[] {
        return [
            this.items[0],
            this.items[3],
            this.items[9]
        ];
    }

    constructor() { }

    ngOnInit(): void {
    }

}
