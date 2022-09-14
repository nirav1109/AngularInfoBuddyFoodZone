import { CartItem } from "./CartItem";
export class Cart {
    items: CartItem[] = [];
    get getTotalAmount(){
        let total = 0;
        this.items.forEach(items => {
            total = total + items.price;
        });
        return total;
    }
}