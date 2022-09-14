import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/Food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param['searchItem'])
        this.foods = this.foodService.getFood().filter(food =>food.name.toLowerCase().includes(param['searchItem'].toLowerCase()));
        else if(param['tag'])
          this.foods = this.foodService.getFoodByTag(param['tag'])
      else 
        this.foods = this.foodService.getFood();
    });
  }
}
