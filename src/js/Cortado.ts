import { Kaffe } from "./Kaffe";
import { Imælk } from "./Imælk";
/**Cortado klassen arver fra Kaffe klassen og implmenterer interface Imælk */
export class Cortado extends Kaffe implements Imælk{
    
    public KaffeDrik(): string {
        return "Cortado";
    }
    mlmælk(): number {
        return 25;
    }
    
    public Pris(): number {
        return 25;
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