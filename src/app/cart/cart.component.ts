import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/Food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart:Cart;
  constructor( private cartService:CartService) { 
    this.setCart();
  }

  ngOnInit() {
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart();
  }
  changeQuantity(cartItem:CartItem , quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }


}
