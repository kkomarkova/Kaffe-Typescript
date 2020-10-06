import { Coffee } from "./Kaffe";
import { Imilk } from "./Imælk";
/**the Cortado class inherit from the Coffee class
 * and implements the Imilk interface
 * */
export class Cortado extends Coffee implements Imilk{
    
    public CoffeeDrink(): string {
        return "Cortado";
    }
    mlmilk(): number {
        return 25;
    }
    
    public Price(): number {
        return 25;
    }

    constructor(discount:number=0){
        super(discount);
    }

    public Strength():String {
       return "Mild"; 
    }

}