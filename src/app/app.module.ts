import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingsPageComponent } from './shoppings-page/shoppings-page.component';
import { CurrentItemsListComponent } from './items-page/current-items-list/current-items-list.component';
import { EveryItemsListComponent } from './items-page/every-items-list/every-items-list.component';
import { ItemComponent } from './items-page/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ItemsPageComponent,
        ShoppingsPageComponent,
        CurrentItemsListComponent,
        EveryItemsListComponent,
        ItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
