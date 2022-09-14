import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFood():Foods[]{
    return [
      {
        id:1,
        name:"New York-Style Pizza",
        cookTime:"10-20",
        price:100,
        favorite:false,
        origins:['NewYork'],
        star:4.5,
        imageUrl:'/assets/food1.jpg',
        tags:['Pizza','Lunch']
      },
      {
        id:2,
        name:"Lentil and Mushroom Burger",
        cookTime:"15-20",
        price:110,
        favorite:true,
        origins:['italy'],
        star:4.8,
        imageUrl:'/assets/food2.jpg',
        tags:['Fastfood','Burger','Lunch']
      },
      {
        id:3,
        name:"Boardwalk/County Fair Fries",
        cookTime:"10",
        price:80,
        favorite:false,
        origins:['India,franch'],
        star:4,
        imageUrl:'/assets/food3.jpg',
        tags:['Fastfood','French Fries','Lunch']
      },
      {
        id:4,
        name:"Chicago-style hot dog",
        cookTime:"20-30",
        price:120,
        favorite:false,
        origins:['Chicago, USA'],
        star:5,
        imageUrl:'/assets/food4.jpg',
        tags:['Fastfood','Hot Dog','Lunch']
      },
      {
        id:5,
        name:"Potato stuffing for pani puri",
        cookTime:"10",
        price:50,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'/assets/food5.jpg',
        tags:['Fastfood','Pani Puri']
      },
      {
        id:6,
        name:"Veg frankies ",
        cookTime:"10-20",
        price:100,
        favorite:true,
        origins:['NewYork'],
        star:4.3,
        imageUrl:'/assets/food6.jpg',
        tags:['Fastfood','Frankies','Lunch']
      },
      {
        id:7,
        name:"Bombay Vada Pav",
        cookTime:"10-20",
        price:30,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'/assets/food7.jpg',
        tags:['Fastfood','Vada Pav','Lunch']
      },
      {
        id:7,
        name:"Rigatoni Pasta",
        cookTime:"10-20",
        price:190,
        favorite:true,
        origins:['India'],
        star:4.9,
        imageUrl:'/assets/food8.jpg',
        tags:['Fastfood','Pasta','Lunch']
      }
    ];
  }
  getFoodByTag(tag:string):Foods[]{
    if(tag === "All")
    {
      return this.getFood();
    }
    else {
     return this.getFood().filter(food => food.tags.includes(tag));
    }
  }
  getAllTag():Tag[]{
    return [
      {name:"All", count:8},
      {name:"Fastfood", count:14},
      {name:"Pizza", count:2},
      {name:"Burger", count:5},
      {name:"Fry", count:9},
      {name:"Soup", count:3},
      {name:"Lunch", count:8}
    ]

  }
  getFoodById(id:number){
    return this.getFood().find(food=>food.id == id);
  }
}
