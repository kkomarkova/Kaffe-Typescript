import {Coffee} from './Coffee';

export class BlackCoffee extends Coffee
{
    name ="Black Coffee";
Price(): number
{
    return 20 - this.discount;
}
Strength(): string
{
    return "Strong";
}
CoffeeDrink():string
{
    return "Black Coffee"
}

}