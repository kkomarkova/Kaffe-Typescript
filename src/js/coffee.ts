export abstract class Coffee
{
//Property discount
discount: number;
name: string;
// abstract method CoffeeDrink
abstract CoffeeDrink(): string 

//abstract method Price() An abstract method “Price()” with return type number.
abstract Price():number;

//A method "Strength ()" With the return type string and which returns the value "Mild
Strength (): string
{
    return "Mild";
}
//A constructor that takes a parameter (discount: number) and sets the “discount” property with this value.
constructor(discount?:number)
{
if(discount == void 0) {discount = 0}
this.discount = discount;
}
}