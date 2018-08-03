import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
  items: CartItem[];

  clear(){
    this.items = [];
  }

  addItem(item: MenuItem){
    // Retorna undefined se nao encontrar ou o item
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if(foundItem){
      console.log(foundItem);
      foundItem.quantity += 1;
    }else{
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(item => item.value()) // retorna um array com os valores de cada item
      .reduce((prev, value) => prev+value, 0) // reduz todos os valores a uma soma
  }
}
