import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingsPageComponent } from './shoppings-page/shoppings-page.component';
import { ItemComponent } from './items-page/item/item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './items-page/item-list/item-list.component';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent,
        ItemsPageComponent,
        ShoppingsPageComponent,
        ItemComponent,
        ItemListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
