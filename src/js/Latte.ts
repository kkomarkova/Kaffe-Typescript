import { Coffee } from "./Coffee";
import { Imilk } from "./Imilk";
/**
 * the Latte class inherits from the Coffee class and 
 * implements the interface IMilk 
 */
export class Latte extends Coffee implements Imilk{
    mlmilk(): number {
        return 125;
    }
    
    public CoffeeDrink(): string {
        return "Latte";
    }

    public Price(): number {
        return 40;
    }

    constructor(discount:number=0){
        super(discount);
    }

    /**
     * Styrke
 :String    */
    public Strength():String {
       return "Mild"; 
    }

}