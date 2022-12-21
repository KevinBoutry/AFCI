"use strict";

/*
    Le principal apport de typescript, c'est dans son nom, c'est le typage.
    C'est à dire que comme dans de nombreux langages, (java par exemple)
    Il va nous falloir indiquer le type de nos variables et arguments.
*/

const mot: string = "Bonjour";
const chiffre: number = 45;
const bool: boolean = true;
const nu: null = null;

/*
    On peut aussi indiquer ce que contiendra nos tableaux
*/

const arr1: string[] = ["truc", "bidule"]
/*
    Si une variable peut contenir n'importe quel type de données, on pourra utiliser le mot clef "any".
    Mais on évitera au maximum de l'utiliser, si n'importe quoi peut recevoir n'importe quelle valeur, autant ne pas utiliser typescript.
*/

let truc:any = 5;
truc = "bidule";
const arr2: any[] = ["truc", 45, true];

/*
    Pour typer un objet, cela devient un peu plus conséquent.
    Je vais devoir indiquer chaque propriété et chaque valeur.

    L'ajout d'un "?" sur une propriété, indique qu'elle sera optionnelle.
*/

const person: {prenom:string, age?:number} = {prenom:"Maurice"}

/*
    Si mon objet peut avoir des propriétés supplémentaires, on peut lui indiquer ainsi :
*/

const person2: {prenom:string, [key:string]:string} = {prenom:"Charles", nom:"Dupont"};

/*
    J'indique ici que les possibles propriétés (key) supplémentaires de mon objet seront des strings contenant comme valeur des strings.

    Dans le cas d'une instanciation de classe, on peut simplement utiliser le nom de la classe.
*/

const today: Date = new Date();

// Bien que plus rarement utilisé, si on veut mettre une fonction dans une variable, il faudra aussi l'indiquer :

const salut: Function = function(){};
/*
    Comme on parle de fonction, voici le moment de typer les arguments et les valeurs de retour.

    "void" est le mot clef indiquant que la fonction ne retourne rien.
*/

function clickMe(e:PointerEvent): void
{
    console.log("Merci de cliquer sur", e.target);    
}

/*
    Notre fonction attend un "PointerEvent", en lui donnant un évènement au click, ce sera un "MouseEvent" qui sera fourni, nous aurons alors une erreur.
*/
document.addEventListener("pointerdown", clickMe)
/*
    Lorsque la fonction est déclarée dans une variabe, on peut indiquer son type ainsi:
*/
const compte: (nom: string)=>number = function(nom){ return nom.length}
/*
    On peut aussi indiquer qu'un argument d'une fonction est en lecture seule.
    C'est à dire qu'il ne peut pas être modifié.
*/
function tri(arg: readonly any[])
{
    // Impossible de trier le tableau en readonly
    // arg.sort();
    // Mais je peux trier sa copie.
    [...arg].sort();    
}
/*
    La plupart du temps indiquer le typer peut être optionel, et TS le détectera lui même.
*/
let a = 5;
// a = "truc";
/*
    Mais parfois TS peut se tromper ou avoir des doutes.
    Il faudra alors lui préciser ouvertement.
*/
// const btn1 = document.querySelector("#compte");
// btn1.style.color = "red"
/*
    Ici notre querySelector retourne soit un Element soit null, donc btn1 ne peut pas avoir la propriété style à coup sûr.

    Il existe plusieurs façon de corriger cela, une d'netre elle est de préciser le retour de notre fonction :
*/

const btn1 = document.querySelector("#compte") as HTMLButtonElement;
btn1.style.color = "red";
/*
    Avec cette première méthode, on précise grâce à "as" quel sera le type retourné.
    Il existe d'autrres façon de l'écrire :
*/
const btn2 = <HTMLButtonElement>document.querySelector("#compte");
// Au dessus, le résultat sera le même que "as"
const btn3 = document.querySelector("#compte")!;
// au dessus, le "!" permet de faire oublier la possibilité de "null"
// btn3.style.color = "red" / style n'est pas trouvé pour un "Element"
const btn4 = document.querySelector<HTMLButtonElement>("#compte");
// au dessus, null est toujours possible, mais le retour n'est plus "Element mais "HTMLButtonElement"

/*
    Parfois une variable peut avoir plusieurs types possibles.
    On utilisera alors l'union type avec "|"
*/

let y: string|number|boolean = 5;
y = "truc";
y = true;