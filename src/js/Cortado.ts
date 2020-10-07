import { iMilk } from "./imilk";

// Class Cortado which implements Imilk interface
export class Cortado extends Coffee implements iMilk
{
Mlmilk():number
    {
        return 25;
    }
Price(): number
{
    return 25 - this.discount;
}
Strength(): string
{
    return "Weak"
}
display():void{
    console.log("The price is" + this.Price);
    console.log("The strength is" + this.Strength);
    console.log("The Discount is" + this.discount);
}
}
