import { Cortado } from "./Cortado";
import { Kaffe } from "./kaffe";
import { Latte } from "./Latte";
import { SortKaffe } from "./SortKaffe";

//liste til at have en af hver kaffe i
let kaffeListe:Kaffe[] = new Array<Kaffe>();


//Opretter forskellige objekter, og pusher dem til arrayet
kaffeListe.push(new Cortado());
kaffeListe.push(new Latte());
kaffeListe.push(new SortKaffe(5));
kaffeListe.push(new SortKaffe());

//Løber listen igennem og printer til konsollen
kaffeListe.forEach(kaffe => {
    printOut(kaffe);
});

//printer et objekt som extender klassen "kaffe" ud i konsollen
function printOut(k : Kaffe) :void
{
    console.log(`Kaffedrik: ${k.KaffeDrik()}`);
    console.log(`Rabat: ${k.Rabat}`);
    console.log( `Styrke: ${k.Styrke()}`);
    console.log(`Pris: ${k.Pris()}`);   
    console.log('__________________'); 
}

//finder div elementet som har id=contents i index.htm
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

//looper kaffelisten igennem og opretter et nyt H1 tag for hvert element i listen
//Hvert h1 tag indeholder kaffedrik samt dens pris
kaffeListe.forEach(kaffe => {
element.innerHTML += `<h1>${kaffe.KaffeDrik()}, pris: ${kaffe.Pris()}kr. </h1>`;
});

