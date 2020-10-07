import { Coffee } from "./Coffee";
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
CoffeeDrink(): string
{
    return "Cortado"
}

}
