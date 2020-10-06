import { Coffee } from "./Coffee";
/**BlackCoffee class inherit from the Coffee class 
 * BlackCoffee dosen't override the method strength men uses the method 
 * that exist in the super class (base class)
*/
export class BlackCoffee extends Coffee {
    
    public CoffeeDrink(): string {
        return "Black Coffee";
    }
    
    public Price(): number {
        let result: number = 20 - this.Discount;
        return (result);
    }

    constructor(discount:number=0){
        super(discount);
    }

}