import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IItem } from './item/item.interface';
import { ItemsService } from './items.service';

@Component({
    selector: 'vdsl-items-page',
    templateUrl: './items-page.component.html',
    styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent implements OnInit, OnDestroy {
    private items: IItem[] = [];
    private currentItems: IItem[] = [];
    private subscription!: Subscription;

    getAllItems(): IItem[] {
        return this.items;
    }
    getCurrentItems(): IItem[] {
        return this.currentItems;
    }

    constructor(private itemsService: ItemsService) { }

    ngOnInit(): void {
        this.subscription = this.itemsService.getItems().subscribe({
            next: items => {
                this.items = items;

                this.currentItems = items.filter(item => item.current);
            },
            error: error => console.log(error)
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }



}
