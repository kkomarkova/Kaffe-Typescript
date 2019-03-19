/**
 * Base klassen Kaffe som skal bruges af alle de andre kaffe klasser
 */
export abstract class Kaffe{

    /**Den rabat som gives på denne kaffe */
    public Rabat:number;

    constructor (rabat:number){
        this.Rabat = rabat;
    };

    /**
     * abstract Pris, Prisen på den pågældende kaffe
     */
    public abstract Pris() : number;

    /**
     * abstract KaffeDrik, Hvilken kaffedrik er det
     */
    public abstract KaffeDrik() : string;

    /**
     * Styrke : String , Hvor stærk er kaffe   */
    public Styrke(): String {
        return "Stærk";
    }

    

}