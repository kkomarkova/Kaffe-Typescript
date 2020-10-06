/**
 * the base class Coffee that all the coffe classes uses
 */
export abstract class Coffee{

    /**Discount for the coffee*/
    public Discount:number;

    /**
     * cosntructorthat takes one parameter
     * @param discount discount for the coffee
     */
    constructor (discount:number){
        this.Discount = discount;
    };

    /**
     * abstract Price, Price for the coffee 
     */
    public abstract Price() : number;

    /**
     * abstract CoffeeDrink, Which coffeedrink is it
     */
    public abstract CoffeeDrink() : string;

    /**
     * Strength : String , How strong is the coffee   */
    public Strength(): String {
        return "Strong";
    }

    

}