import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { RadioOption } from "app/shared/radio/radio-option.module";
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { validateConfig } from '../../../node_modules/@angular/router/src/config';
import { ValueTransformer } from '../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern: RegExp = /^[0-9]*$/

  orderForm: FormGroup

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de crédito', value: 'DEB'},
    {label:'Cartão Refeição', value: 'REF'}
  ]

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5)]), // Valor do input
      email: this.fb.control('',[Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      number: this.fb.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control('',[Validators.required])
    })
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }

}
