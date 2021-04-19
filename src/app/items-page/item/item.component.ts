import { Component, Input, OnInit, Output, EventEmitter, ViewChild, TemplateRef, OnChanges, AfterViewInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

    @Output() openHistoryModalEvent = new EventEmitter<IItem>();

    @ViewChild('itemCurrentLinkTemplate') public itemCurrentLinkTemplate: TemplateRef<any>;
    public currentLinkModalRef: BsModalRef;

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
        this.openHistoryModalEvent.emit(this.item);
    }
    openCurrentLinkModal() {
        this.currentLinkModalRef = this.modalService.show(this.itemCurrentLinkTemplate);
    }
    closeCurrentLinkModal() {
        this.currentLinkModalRef.hide();
    }

    constructor(private modalService: BsModalService) { }
}
