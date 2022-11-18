"use strict";

const indice = document.querySelector("#indice")
const wincard = document.querySelector("#win")
const restart = document.querySelector("#restart")
const proposer = document.querySelector("#proposer")
const carte = document.querySelector("#carte")

var win = Math.round(Math.random()*100)
var tentative = 0

wincard.innerHTML = `${win}`

const proposition = document.querySelector("#proposition")

function jeu(e)
{
    if(e.target.value == win)
    {
        indice.innerHTML = "Vous avez gagné"
        tentative = tentative + 1
        wincard.classList.add("animation")
        restart.classList.add("animation")
        carte.classList.add("animcarte")
    }
    else if(e.target.value < win)
    {
        indice.innerHTML = `C'est plus grand que ${e.target.value} !`
        tentative = tentative + 1
    }
    else if(e.target.value > win)
    {
        indice.innerHTML = `C'est plus petit que ${e.target.value} !`
        tentative = tentative + 1
    }
        
    if(tentative > 7)
    {
        indice.innerHTML = `Vous avez perdu !`
        wincard.classList.add("animation")
        restart.classList.add("animation")
    }
    
    e.target.value = "";
}

function reset()
{
    wincard.classList.remove("animation");
    restart.classList.remove("animation");
    carte.classList.remove("animcarte");
    win = Math.round(Math.random()*100);
    indice.innerHTML = "Veuillez choisir un nombre entre 1 et 100, vous avez 7 essais";
    tentative = 0;
    wincard.innerHTML = `${win}`;
    document.querySelector("#proposition").focus
}

proposition.addEventListener("change", jeu);
// proposer.addEventListener("click")
restart.addEventListener("click",reset);
console.log(win);

