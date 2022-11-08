"use strict";
/*
    Par défaut, une fonction est déclarée avec le mot clef "function"
    Il est suivi du nom de la fonction, puis de parenthèse qui accueilleront les possibles arguments
    et enfin les accolades qui contiendront le corps de la fonction.

    Une fonction déclaré ainsi peut être appelé avant ou après sa déclaration.

    Pour appeler une fonction, on écrit son nom suivi de parenthèse.
*/
salut();
function salut(){
    console.log("Bonjour tout le monde !");
}
salut();
/*
    Il existe d'autres déclaration possible.
    comme en plaçant une fonction dans une variable
*/
const salut2 = function(){
    // Ici on a rangé dans notre variable une fonction anonyme.
    console.log("Salut tout le monde !");
}
salut2();

const salut3 = ()=>{
    // Ici c'est une fonction fléché
    console.log("Coucou tout le monde !");
}
salut3();

const salut3bonus = ()=>console.log("Coucou bonus");
// On peut écrire une fonction fléché sans accolade si il n'y a qu'une seule action à réaliser.

// Je peux aussi ranger mes fonctions dans des objets.
const s = {
    salut: function(){
        console.log("Salutation tout le monde");
    }
}
s.salut();

let arr = [function(){console.log("Hello World")}];

arr[0]();

// -------------------------------------- Les paramètres -----------------------------------

function bonsoir(nom){
    if(nom == undefined)
    {
        console.error("Donne moi un argument stp");
    }
    console.log("Bonsoir " + nom);
}
// JS accepte d'appeler une fonction qui attend des paramètres sans lui en donner, ils seront alors undefined.
bonsoir();
// Si on lui donne des paramètres, ils seront alors placés dans les arguments de la fonction selon leur ordre.
bonsoir("Maurice");
// Si on donne des paramètres en trop, ils seront juste ignorés
bonsoir("Maurice" , "Elisabeth");

function bonneNuit(nom1, nom2)
{
    // %c en début de string indique que l'on va donner du css en second argument pour mettre du style à notre console.log
    console.log("%cBonne nuit "+nom1+" et "+nom2, "color: blue; font-size:4rem");
}
/*
    Chaque arguments de la fonction est séparé d'une virgule, autant lors de sa déclaration, que lors de son appel.
*/
bonneNuit("Raphael", "Charles");

function goodbye(nom1, nom2 = "les autres")
{
    console.log(`Goodbye ${nom1} et ${nom2}`);
}
goodbye("Kevin")
goodbye("Kevin", "Alan")

// Le rest operator "..." prend tous les arguments donnés et les rangent dans un tableau.
function goodMorning(...noms)
{
    // toString transforme un tableau en string
    console.log("Good morning " +noms.toString());
    // join fait de même en séparant les éléments du tableau par le string donné en paramètre.
    console.log("Good morning " +noms.join(" et "));
}
goodMorning("Antoine", "Jean", "Charles", "Karl")


// ------------------------------------------- Mettre fin à une fonction et retourner des informations -----------------------------------

function insulte(nom)
{
    if(nom == undefined)
    {
        console.error("Donne moi un nom !");
        // le mot cled return met fin à une fonction
        return;
    }
    // Il peut aussi permettre de retourner des informations traitées par la fonction.
    return nom + " le poltron";
    // Ce console.log ne sera jamais exécuté.
    console.log("COUCOU !");
}
insulte()
// Les informations retournées par une fonction peuvent être rangée dans une variable
let truc = insulte("Bob")
console.log(truc);
// ou directement utilisé dans une autre fonction
console.log(insulte("Karl"));


// ------------------------------------- Retour sur forEach et fonction callback -----------------------------------------------

let pr = ["Alice" , "Ariel", "Mulan", "Belle"];
/*
    forEach comme d'autres methodes prennent une fonction en paramètre.
    Donner une fonction en argument d'une autre fonction, c'est ce qu'on appelle une fonction callback.
    Lorsque l'on donne une fonction callback, on donne seuelemnt son et on ne met pas les parenthèses, ce n'est pas un appel de fonction.
*/
pr.forEach(bonsoir);

// Plutôt que de déclarer une fonction, on peut directment lui donner une fonction anonyme
pr.forEach(function(princesse){
    console.log("Bonsoir "+princesse);
})

// On peut aussi le réduire à une fonction fléché.
pr.forEach((princesse)=>{
    console.log("Bienvenue " +princesse);
})

// Si la fonctione fleché ne prend qu'un seul argument, elle peut être encore réduite.
pr.forEach(princesse=>{
    console.log(princesse);
})

// Si on a une seule instruction; les accolades peuvent disparaitre
pr.forEach(princesse=>console.log(princesse));

let maj;
maj = pr.map(princesse=>{
    // Certaines fonction comme map ont besoin que l'on retourne la valeur transformé
    return princesse.toUpperCase()
})
console.log(maj);

// la fonction fléché a une seule instruction, (sans accolade) fait ce qu'on appelle un "retour implicite", c'est à dire que même si le return n'est pas écrit, liinstruction est bien retournée

let maj2 = pr.map(princesse=>princesse.toUpperCase());
console.log(maj2);

function compliment(salutation, nom){
    salutation(nom+" le magnifique")
}
compliment(bonsoir, ("Greg"));
compliment(nom=>console.log(("Guttenrag "+nom), "Hanz"));

//  -------------------------------- fonction recurcives -----------------------------------------------------

// Une fonction récurcive s'appelle elle même
function encore(x)
{
    // ! ATTENTION il faut toujours une condition de sortie
    if(x<=0)return;
    console.log(x);
    encore(--x)
}
encore(10);