import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingsPageComponent } from './shoppings-page/shoppings-page.component';

const routes: Routes = [
    { path: 'items', component: ItemsPageComponent },
    { path: 'shoppings', component: ShoppingsPageComponent },
    { path: '**', redirectTo: '/items' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
