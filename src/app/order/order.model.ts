import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";

class Order {
    constructor(
        public name: string,
        public address: string,
        public email: string,
        public emailCOnfirmation: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = [],
        public id?: string
    ){}
}

class OrderItem {
    constructor(
        public quantity: number, 
        public menuId: string
    ) {}
}

export {Order, OrderItem}