import { Cortado } from "./Cortado";
import { Coffee } from "./kaffe";
import { Latte } from "./Latte";
import { BlackCoffee } from "./SortKaffe";

//liste til at have en af hver kaffe i
let coffeeMenuList:Coffee[] = new Array<Coffee>();


//creates the different coffee objects and push them to the array
coffeeMenuList.push(new Cortado());
coffeeMenuList.push(new Latte());
coffeeMenuList.push(new BlackCoffee());

//runs through the list and prints the elments to the console
coffeeMenuList.forEach(coffee => {
    printOut(coffee);
});

//helper method to print out an object that extends the class "Coffee" to the console
function printOut(k : Coffee) :void
{
    console.log(`Kaffedrik: ${k.CoffeeDrink()}`);
    console.log(`Rabat: ${k.Discount}`);
    console.log( `Styrke: ${k.Strength()}`);
    console.log(`Pris: ${k.Price()}`);   
    console.log('__________________'); 
}

//finds the <div> element with id="coffeemenu" in index.htm
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("coffeemenu");

//loops through the coffeemenulist and creates a new h4 tag   
//for each element in the list (in a fast and dirty way using the innerHTML property)
//Hvert h1 tag indeholder kaffedrik samt dens pris
coffeeMenuList.forEach(coffee => {
element.innerHTML += `<h4>${coffee.CoffeeDrink()}, pris: ${coffee.Price()}kr. </h4>`;
});

//add a click eventlister to the button for blackcoffee
let orderButtonBlackCoffee: HTMLButtonElement = 
<HTMLButtonElement> document.getElementById("OrderBlackCoffee");
orderButtonBlackCoffee.addEventListener("click",addBlackCoffee)

//add a click eventlister to the button for latte
let orderButtonLatte: HTMLButtonElement = 
<HTMLButtonElement> document.getElementById("OrderLatte");
orderButtonLatte.addEventListener("click",addLatte)

//add a click eventlister to the button for cortado
let orderButtonCortado: HTMLButtonElement = 
<HTMLButtonElement> document.getElementById("OrderCortado");
orderButtonCortado.addEventListener("click",addCortado)

let OrderCoffeeList:Coffee[] = new Array<Coffee>();

//add black coffee to the orderarray
function addBlackCoffee(e:MouseEvent){
    let blackCoffee:BlackCoffee = new BlackCoffee();
    OrderCoffeeList.push(blackCoffee);
    UpdateOrderList(blackCoffee)
}

//add a latte to the orderarray
function addLatte(e:MouseEvent){
    let latte:Latte = new Latte();
    OrderCoffeeList.push(latte);
    UpdateOrderList(latte)
}

//add a cortadoto the orderarray
function addCortado(e:MouseEvent){
    let cortado:Cortado  = new Cortado();
    OrderCoffeeList.push(cortado);
    UpdateOrderList(cortado)
}


//finds the orderlist in the DOM
//Remove all childs in the list
//Loop the order array and create a new node for each element and add it to the list
//calculate the total price 
function UpdateOrderList(coffee:Coffee){
    console.log("In UpdateOrderList");
    let list = document.getElementById("coffeeOrderList");
    let total:number = 0;

    //remove all the li elements one by one
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
   
    //add new elements to the DOM from the array
    OrderCoffeeList.forEach(c => {

        total += c.Price();
    
        let newLi:HTMLLIElement = document.createElement('li');
        let newText:Text = document.createTextNode(c.CoffeeDrink())
        newLi.appendChild(newText);
        list.appendChild(newLi);



    });
    //insert the total price into the DOM
       document.getElementById("totalPrice").innerText = (total).toString();


}

