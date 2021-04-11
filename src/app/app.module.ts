import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingsPageComponent } from './shoppings-page/shoppings-page.component';
import { CurrentItemsListComponent } from './items-page/current-items-list/current-items-list.component';
import { EveryItemsListComponent } from './items-page/every-items-list/every-items-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemsPageComponent,
        ShoppingsPageComponent,
        CurrentItemsListComponent,
        EveryItemsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
