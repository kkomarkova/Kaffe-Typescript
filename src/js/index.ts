import { BlackCoffee } from './BlackCoffee';
import {Cortado} from './Cortado';
import { Latte } from './latte';

let cortado = new Cortado;
console.log("The name of the coffee is"+ cortado.CoffeeDrink());
    console.log("The price is" + cortado.Price());
    console.log("The strength is" + cortado.Strength());
    console.log("The amount is" + cortado.Mlmilk());

let latte = new Latte;
    console.log("The name of the coffee is"+ latte.CoffeeDrink());
    console.log("The price is" + latte.Price());
    console.log("The strength is" + latte.Strength());
    console.log("The amount is" + latte.Mlmilk());

let disblackcoffee = new BlackCoffee(4);
console.log("The name of the coffee is"+ disblackcoffee.CoffeeDrink());
    console.log("The price is" + disblackcoffee.Price());
    console.log("The strength is" + disblackcoffee.Strength());
    console.log("The discount is" + disblackcoffee.discount);

let blackcoffee = new BlackCoffee;
console.log("The name of the coffee is"+ blackcoffee.CoffeeDrink());
console.log("The price is" + blackcoffee.Price());
console.log("The strength is" + blackcoffee.Strength());
console.log("The discount is" + blackcoffee.discount);

    
