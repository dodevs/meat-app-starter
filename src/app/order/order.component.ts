import { Component, OnInit } from '@angular/core';
import { RadioOption } from "app/shared/radio/radio-option.module";
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de crédito', value: 'DEB'},
    {label:'Cartão Refeição', value: 'REF'}
  ]

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item);
  }

  remove(item: CartItem){
    return this.orderService.remove(item);
  }

}
