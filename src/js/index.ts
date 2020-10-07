abstract class Coffee
{
//Property discount
discount: number;
//abstract method Price() An abstract method “Price()” with return type number.
abstract Price():number;

//A method "Strength ()" With the return type string and which returns the value "Mild
Strength (type:string)
{
    return "Mild";
}
//A constructor that takes a parameter (discount: number) and sets the “discount” property with this value.
cunstructor(discount?:number)
{
if(discount == void 0) {discount = 0}
this.discount = discount;
}
}