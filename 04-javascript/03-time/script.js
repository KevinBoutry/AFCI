"use strict";

// *Crée un objet date qui contient la date et l'heure du moment de sa création
// Se renseigner sur l'objet date : "new Date();""
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

let date = new Date();
console.log(date);

// * Changer le span dans le footer par l'année en cours.

const annee = date.getFullYear();
var span = document.querySelector("footer h3 span");
span.innerHTML = `${annee}`;


// toLocaleTimeString nous rend l'heure, les minutes et les secondes en un string.


// * Se renseigner sur la fonction setInterval()
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval

// * Créer un timer qui change à chaque seconde. avec un bouton stop qui permet de l'arrêter.
// * se renseigner pour cela sur clearInterval :
// https://developer.mozilla.org/en-US/docs/Web/API/clearInterval

const heure = document.querySelector("time")

function timer()
{
    const dateTimer = new Date();
    heure.textcontent = dateTimer.toLocaleTimeString();
}

let idInterval = setInterval(timer, 1000);


// myRuntime();

// var myTime = setInterval(()=>myRuntime(), 1000);

// function myRuntime() 
// {
//     var heure = document.querySelector("time");
//     var result = date.toLocaleTimeString();
//     console.log(result);
//     heure.innerHTML = result;
// }

// function myStoptime() {
//     clearInterval(myTime);
// }

const btnstop = document.querySelector("button");
btnstop.addEventListener("click", ()=>clearInterval(idInterval));

// * Se renseigner sur setTimeout()
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

let idTimeout = setTimeout(()=>console.log("Coucou en retard!"),3000);

const progress = document.querySelector(".progress");
let w = 0;
function load()
{
    if(w === 100)return;
    w++;
    progress.getElementsByClassName.width = w+"%";
    setTimeout(load, 100);
}
load();


// * Créer une fonction réccurcive (qui s'appelle elle même) utilisant setTimeout pour attendre 1 seconde avant de se lancer. Celle ci devra permettre de remplir la barre de progression visible sur le gif.
// les traces noires sont un bug de la capture, ne pas en tenir compte

// indice : la barre de progression est juste une div dont la largeur augmente jusqu'à 100%