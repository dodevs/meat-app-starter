import { NgModule } from "../../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../../node_modules/@angular/router";

import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { SharedModule } from "../shared/shared.module"; // Todos os outros imports estao inclusos nesse modulo

// Array de rotas
const ROUTES: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {

}