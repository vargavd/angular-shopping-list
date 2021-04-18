import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { IItem } from './item/item.interface';
import { ItemsService } from './items.service';

@Component({
    selector: 'vdsl-items-page',
    templateUrl: './items-page.component.html',
    styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent implements OnInit, OnDestroy {
    public items: IItem[] = [];
    private subscription!: Subscription;

    @ViewChild('itemModalTemplate') public itemModalTemplate: TemplateRef<any>;
    public modalRef: BsModalRef;
    public itemInModal: IItem;

    constructor(private itemsService: ItemsService, private modalService: BsModalService) { }

    openModal(item: IItem) {
        this.itemInModal = item;

        this.modalRef = this.modalService.show(this.itemModalTemplate);
    }
    closeModal() {
        this.modalRef.hide();
    }

    ngOnInit(): void {
        this.subscription = this.itemsService.getItems().subscribe({
            next: items => {
                this.items = items;

                if (this.modalRef === undefined && this.items.length > 0) {
                    this.openModal(this.items[0]);

                    console.log(this.items[0]);
                }
            },
            error: error => console.log(error)
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }



}
