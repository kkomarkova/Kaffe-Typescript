import { Kaffe } from "./Kaffe";
import { Imælk } from "./Imælk";
/**Latte klassen arver fra Kaffe klassen og implementerer interface Imælk */
export class Latte extends Kaffe implements Imælk{
    mlmælk(): number {
        return 125;
    }
    
    public KaffeDrik(): string {
        return "Latte";
    }

    public Pris(): number {
        return 40;
    }

    constructor(rabat:number=0){
        super(rabat);
    }

    /**
     * Styrke
 :String    */
    public Styrke():String {
       return "Mild"; 
    }

}