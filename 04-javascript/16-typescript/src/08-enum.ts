"use strict";

/*
    Le type unknown est utilisé pour indiquer que l'on ne connait pas le type de notre argument.
    A la différence de any, toute action spécifique à un type sera bloqué.
*/

function hasard(arg: unknown)
{
    // Impossible d'utiliser toString car on ne sait pas si ça pourrait fonctionner.
    // arg.toString()
    if(typeof arg === "number")
        arg.toString();
        // On peut utiliser le narrowing pour trouver le type d'un unknown
}
/*
    Une constante aura tendance à prendre comme type, un literal, c'est à dire que son type vaudra exactement sa valeur:
*/

const a = "Bonjour";
let a1 = "Bonjour";
// Un objet par contre, même si le fait qu'il soit un objet ne changera pas, verra ses propriétés changées.
const b = {truc: "banane", machin: "camion"};
/*
    Mais je peux changer ça graâce à certains mots clefs.
    Par exemple avec "as"
*/

const b1 = {truc: "banane" as "fruit", machin: "camion" as const};
/*
    le type de "truc" devient le literal "fruit" et celui de "machin" comprenant qu'il est uen constante, devient le literal "camion"
*/

const b2 = {truc: "banane", machin: "camion"} as const;

/*
    Je peux aussi utiliser "as const" à l'extérieur de l'objet pour indiquer que l'objet en entier ne changera pas.
    Ainsi que les propriétés de b2 sont devenues des propriétés en "readOnly" ayant comme type les literals de leur valeur
*/

const c1 = [1,2,3] as const;
// Mon tableau contient des strings ou des nombres.
const c2: (string|number)[]=[34, "truc", 35, 67];
// Ceci est un "tuple", il indique que mon tableau devra contenir exactement un string puis un nombre.
const c3: [string, number] = ["truc", 5]

type listeBool = [string, boolean];
const c4: listeBool = ["chaussette", true];
const c5: listeBool = ["tong", false];

/*
    Ma fonction fusion, prend 2 arguments de type T1 et T2 qui extends d'un tableau inconnu.
    Il retournera une fusion des tableaux et des 2 types
*/
function fusion<T1 extends unknown[], T2 extends unknown[]>(tab1:T1,tab2: T2): [...T1, ...T2]
{
    return[...tab1, ...tab2];
}
// Le type de c6 est donc un tuple fusion des 2 tuples précédents.
const c6 = fusion(c4,c5);

/*
    Ce qu'on a fait avec la fonction précédente peut être résumé à cela:
*/

type DoubleLB = [...listeBool, ...listeBool];
const c7: DoubleLB = [...c4, ...c5];

// ------------------- enumerateur ----------------------

/*
    Les enumerateurs permettent de lister des valeurs qui seront les seuls valeurs utilisables
*/
// enum Fruits{
//     Banane,
//     Fraise,
//     Pomme,
//     Cerise 
// }
// 
// enum Fruits{
//     Banane = "Banane",
//     Fraise = "Fraise",
//     Pomme = "Pomme",
//     Cerise = "Cerise"
// }
// Cette version n'apparait pas dans la compilation.
const enum Fruits{
    Banane = "Banane",
    Fraise = "Fraise",
    Pomme = "Pomme",
    Cerise = "Cerise"
}
interface favorite{
    fruits: Fruits;
    legume: string;
}
const maurice: favorite = {
    legume:"Poivron",
    fruits: Fruits.Banane
}