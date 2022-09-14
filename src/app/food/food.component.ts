import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/Food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food!:Foods;
  constructor(private route:ActivatedRoute, private foodService:FoodService, private cartService:CartService, private router:Router) { 
    this.route.params.subscribe(param=>{
      if(param['id'])
      {
        this.food = this.foodService.getFoodById(param['id']);
      }
    })
  }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addtoCart(this.food);
    this.router.navigateByUrl('/cart');
  }

}
