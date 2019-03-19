import { Kaffe } from "./kaffe";
/**SortKaffe klassen arver fra Kaffe klassen 
 * SortKaffe overskriver ikke metoden Styrke, men bruger den som findes i 
 * superklassen (base klassen) Kaffe
*/
export class SortKaffe extends Kaffe {
    
    public KaffeDrik(): string {
        return "Sort Kaffe";
    }
    
    public Pris(): number {
        let result: number = 20 - this.Rabat;
        return (result);
    }

    constructor(rabat:number=0){
        super(rabat);
    }

}