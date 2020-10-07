import { Coffee } from "./Coffee";
import { iMilk } from "./imilk";

// Class Cortado which implements Imilk interface
export class Latte extends Coffee implements iMilk
{
Mlmilk():number
    {
        return 120;
    }
Price(): number
{
    return 40 - this.discount;
}
Strength(): string
{
    return "Weak"
}

}