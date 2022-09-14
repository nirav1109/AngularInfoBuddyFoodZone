import { Foods } from "./food";

export class CartItem {
    constructor(food:Foods){
        this.food=food;
    }
    food : Foods;
    quantity:number = 1;
    get price(){
        return this.food.price * this.quantity;
    }
}