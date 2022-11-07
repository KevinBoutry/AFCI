"use strict";
// Commentaire sur une seule ligne
/*
    Commentaire sur plusieurs lignes
    "use strict" permet de rendre moins permissif Javasript, JS ne corrigera pas de lui même les petites erreurs qu'il détecte.
*/

//  ---------------------------------- Déclaration des variables ---------------------------------------------

// On déclare une variable avec le mot clef "let"
let banane;
// On fait appel à une variable simplement en écrivant son nom.
console.log("banane : ", banane);

var tomate;
// On peut aussi déclarer une variable avec "var", mais la portée sera plus grande.

const cerise = 5;
console.log("cerise : ", cerise);
// const permet de déclarer une constante, c'est une variable dont la valeur ne pourra pas changer, par ce fait sa valeur doit être définit à sa création.

let a,b,c;
var d, e=5, f=1;
// Je peux déclarer plusieurs variables à la suite en les séparant par une virgule. Je peux leur donner une valeur de départ.

/*
    Les noms des variables peuvent contenir des lettres, des chiffres, des " " ou des "$" (entre autre) mais ne peuvent pas commencer par un chiffre
*/

//  ---------------------------------- La portée des variables ---------------------------------------------

let gLet = 1;
var gVar = 1;
{
    let hLet = 2;
    var hVar = 3;
    console.log(gLet, gVar, hLet, hVar);
}
// console.log(gLet, gVar, hLet, hVar);
/*
    Une variable défini avec let est accessible uniquement dans son bloc et ses enfants. Ici hlet n'est pas accessible hors de son bloc.
    const suit les même régles que let
*/

// let gLet = 5;
// On ne peut pas redéclarer une variable déjà existante;
{
    let gLet = 5;
    var gVar = 5;
    // Redéclarer une variable existante dans un bloc n'est pas une erreur c'est une variable différente
    console.log("Dans le block :", gLet, gVar);
}
console.log("Hors du block : ", gLet, gVar);
/*
    let a créé une nouvelle variable dans le bloc, et hors du bloc nous retourne celle d'origine.
    var a écrasé l'ancienne variable pour ne garder que la nouvelle
*/

//  ---------------------------------- Types des variables ---------------------------------------------

let num = 5,
    str = "Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;
    // typeof va me retourner le type de la variable donnée en paramètre
console.log("num", typeof(num));
// number
console.log("str", typeof(str));
// string
console.log("bol", typeof(bol));
// boolean
console.log("arr", typeof(arr));
console.log("obj", typeof(obj));
// object
//  Les tableaux et les objets fonctionnent différemment mais sont tous les deux de type "object"
console.log("und", typeof(und));
// undefined
bol = 42;
/* 
    JS est un langage non typé ce qui signifie qu'on a pas besoin de préciser le type de variable lors de sa déclaraion.
    Cela signifie aussi qu'on peut changer le typer d'une variable sans provoquer d'erreur
*/

//  ---------------------------------- Variable : string ---------------------------------------------

let s1 = "Coucou",
    s2 = 'Coucou',
    s3 = `Coucou`;
// Pour définir un string on peut utiliser au choix "" , '' ou ``
// "" et '' ont peu ou pas de différence d'utilisation.
s1 = "L'appostrophe ne pose aucun problème ici."
s2 = 'L\'appostrophe pose problème ici';
s1 = "Le grand ordinateur a dit \"42\"";
s2 = 'Le grand ordinateur a dit "42"';
/*
    Si on souhaite utiliser des guillements dans un string fait à partir de guillement (et inversement pour les appostrophes),
    Il faudra les échapper en utilisant "\", cela indiquera à JS de ne pas prendre en compte ce caractère.
*/
s1 = "Karl";
s2 = 'Bonjour ' + s1 + " Comment vas tu ?";
console.log(s2);
// Le symbole de concaténation (Fusion de chaîne de caractère) en JS est "+"
s3 = `Bonjour ${s1} Comment vas tu ?`;
console.log(s3);
/* 
    Les string en `` permettent de faire usage d"interpolation.
    C'est à dire pouvoir intégrer du JS directement dans le string, pour cela on utilisera "${}"
*/
// s2 = 'Je ne peux pas sauter
// à la ligne';
s3 = `Je peux très bien 
sauter à la ligne`;
console.log(s3);

//  ---------------------------------- Variable : number ---------------------------------------------

console.log(9999999999999999999999)
// JS perd en précision sur les très grand nombre.

console.log(0.2 + 0.1);
// JS peut avoir des imprécisions avec les nombres à virgule.

console.log(
    5+5,
    5-5,
    5*5,
    5/5,
    5%2,
    5**5
);
// % le modulo (retourne le reste de la division)
// ** la puissance

console.log(
    5 + "5",
    5 - "5",
    5 + "Banane",
    5 - "Banane"
);
/*
    JS si il doit addition un string et un nombre fera une concaténation.
    Si il doit soustraire un string et un nombre, il testera si le string contient un nombre, si c'est le cazss il fera la soustraction, sinon il répondra NaN (Not a Number)
*/
console.log(
    isNaN(5-"chaussette"),
    isNaN(5-"1")
);
// isNaN() permet de vérifier si le paramètre n'est pas un nombre.

console.log(Infinity, -Infinity);
// Le mot Infinity représente le nombre maximum utilisable en JS

let n = 0;
n = n+5;
n += 5;
n -= 2;
n *= 3;
n /= 4;
console.log(n);
// += permet de donner à la variable sa propre valeur additionné du nombre suivant, (de même pour les autres opérateurs)

n += 1;
n++;
++n;
n--;
--n;
console.log(
    n,
    n++,
    ++n,
    n--,
    --n
);
/*
    L'incrémntation (++) et la décrémentation (--) permettent d'augmenter ou diminiuer la valeur d"une variable de 1.
    Selon si les opérateurs sont placés avant ou après la variable. La valeur retournée sera celle d'avant ou après opération.
*/
n = 17;
console.log(
    n.toString(),
    n.toString(2),
    n.toString(16)
);
/*
    la méthode toString() permet de transformer un nombre en string.
    Sans lui donner de paramètre, il utilisera la base 10, mais on peut lui donner une autre base en paramètre.
*/

let s = "10011101"
console.log(
    parseInt(s,2),
    parseInt(s)
);
/*
    Inversement on peut utiliser la fonction parseInt() pour transformer un string en nombre
*/

//  ---------------------------------- Variable : array ---------------------------------------------

let a1 = [5, "truc", true],
    a2 = new Array(5, "truc", true);
console.log(a1, a2);
// Pour accéder à une valeur en particulier du tableau :
console.log(a1[0], a1.length);
/*
    mettre le nom de la variable suivi de crocher, permet d'indiquer entre ses corchets l'index de l'élément que l'on souhaite afficher.
    Un tableau commence toujours à l'index 0.
    On peut aussi accéder à ses propriétés en faisant suivre la variable d'un point puis du nom de la propriété.
*/
console.log(a1[a1.length-1]);
/*
    accder au dernier élément d'un tableau :
    au dessus : avant Ecmascript 2022
    en dessous : depuis Ecmascript 2022
*/
console.log(a1.at(-1));
//  .at() fonctionne aussi sur les string
console.log("Salut".at(-1));

// La méthode push permet d'ajouter un élément à la fin du tableau
a1.push("bidule");
console.log(a1);

// pop retire le dernier élément du tableau
a1.pop();
console.log(a1);

// shift retire le 1er élément du tableau
a1.shift();
console.log(a1);

// unshift ajoute un élément en 1ere position du tableau
a1.unshift(42);
console.log(a1);

// splice retire depuis l'index donné en 1er argument, le nombre d'élément donné en 2nd argument
a1.splice(1, 1);
console.log(a1);
a1.push("chaussette");

// On peut ajouter autant de paramètres que l'on veut à splice, il placera ses paramètres à la palce des éléments retirés.
a1.splice(1,1,"machin");
console.log(a1);

let a3 = [4,1,42,8,14];
console.log(a3);

// sort tri le tableau par ordre alphabétique (même les chiffres)
a3.sort();
console.log(a3);

// On peut modifier ou ajouter des éléments ainsi :
a1[a1.length] = "Pizza";
console.log(a1);

let a4 = a1;
console.log(a1, a4);
/*
    Les variables de tableau ne contiennent pas les valeurs du tableau mais l'adresse mémoire où se trouve le tableau dans l'ordinateur.
    De ce fait, ici on a juste indiqué à a4 qu'il cible la même adresse que a1, en modifier un modifiera l'autre.
*/
a4.push("Cerise");
console.log(a1, a4);
/*
    En utilisant le spread operator (...) on demande à JS de déconstruire notre tableau, plaçant les différentes valeur du tableau les une après les autres.
    Ici je l'ai mit dans un nouveau tableau, nous permettant ainsi de faire une copie de notre tableau
*/
let a5 = [...a1];
a5.push("avocat");
console.log(a1, a5);
console.log(...a5);

/*
    Si je place un tableau dans un autre tableau, je me retrouve dans un tableau multidimensionnel.
    Si je veux les fusionner il faut utiliser le spread operator (...)
*/
let a6 = ["pomme", "banane", a5, "orange"];
console.log(a6);
let a7 = ["pomme", "banane", ...a5, "orange"];
console.log(a7);
// Pour accéder à un élément d'un tableau multidimensionnel, il me suffit d'indiquer plusieurs index à la suite.
console.log(a6[2][3]);
let a8 = [[[[[["Coucou"]]]]]];
console.log(a8[0][0][0][0][0]);

// On peut ou devrait utiliser const pour les tableaux puisque ce qui est stocké est l'adresse mémoire et non le contenu


//  ---------------------------------- Variable : object ---------------------------------------------

const o1 = {nom: "Dupont", age:45, loisir:["bowling", "mahjong"]};
/*
    Les objets ressemblent à des tableaux mais dans lesquels au lieu d'indexer par des chiffres, on index par des noms de propriété.
*/
// On peut accéder aux données de la même façon qu'un tableau ou en utilisant "." suivi de la propriété
console.log(o1);
console.log(o1["age"], o1.age);
console.log(o1["loisir"][0],o1.loisir[0]);
const o2 = {vegetal : {legume: {haricot: {couleur : "vert"}}}};
console.log(o2.vegetal.legume.haricot.couleur);

// Comme pour les tableaux, c'est l'adresse qui est sauvegardé. Il faut utiliser le spread operator pour faire une copie
const o3 = o1;
o3.signe = "Balance";
console.log(o1, o3);

const o4 = {...o1};
o4.signe = `Scorpion`;
console.log(o1, o4);
// On peut transformer un tableau en objet mais pas inversement.
console.log(...a1);

o4.yeux = "vert";

// En cas de fusion, les doublons sont remplacés par ceux du dernier objet.
const o5 = {...o4, ...o1};
console.log(o5);

//  ---------------------------------- Variable : boolean ---------------------------------------------

let b1 = true, b2 = false;
// les booleans ne peuvent avoir que 2 valeurs, true ou false.

// Mais on peut les faire apparaître de plein de façon :

console.log( "1 < 2 :", 1<2);
console.log( "1 > 2 :", 1>2);
console.log( "1 <= 2 :", 1<=2);
console.log( "1 >= 2 :", 1>=2);
console.log( "1 == '1' :", 1 =='1');
console.log( "1 === '1' :", 1 ==='1');
console.log( "1 != '1' :", 1 !='1');
console.log( "1 !== '1' :", 1 !=='1');
console.log("b1 : ", b1, "b2 : ",b2);
console.log("!b1 : ", !b1, "!b2 : ",!b2);


