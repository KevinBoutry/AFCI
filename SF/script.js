"use strict";

// const visant l'input ou l'on rentre le nom des personnages
const input = document.querySelector("input")
// const visant l'ensemble des vignettes de personnages
const char = document.querySelectorAll(".hidden");
// const visant le bouton reset
const btn = document.querySelector("#btn");
// const visant le bouton stop
const stopbtn = document.querySelector("#stop");
// const visant le chrono
const chrono = document.querySelector("#timer");
// const visant l'image fight
const fightimg = document.querySelector("#fight");
// const visant la div defaite
const lose = document.querySelector("#lose")
// const visant le message de défaite
const losemsg = document.querySelector("#lose p")

// var permettant de mettre le chrono à 0
var minutes = 0
var secondes = 0;

// var utilisé pour récupérer l'ID de notre chrono et pouvoir le stopper
var intervalID = 0;

// var stockant le nombre de personnages trouvés
var charfound = 0

// Fonction vérifiant les noms entrés dans l'input et les comparants avec les id de toutes les vignettes, on eleve l'attirbut hidden de la vignette si un match est trouvé.
input.addEventListener("input", inputTOvar);

function inputTOvar(k)
{
    console.log(k.target.value);
    for (let i = 0 ; i < 46 ; i++)
    {
        if(char[i].id == k.target.value)
        {
            char[i].classList.remove("hidden");
            charfound = charfound + 1
            console.log(charfound)
            input.value = ''
            return               
        }
    }   
}

// fonction gérant le déroulement du chrono
chrono.innerHTML = `${minutes} : ${secondes}`

function chronoplus()
{
    secondes++;
    if (secondes >= 60)
    {
        secondes = 0;
        minutes++
    }
    console.log(secondes, minutes);
    chrono.innerHTML = `${minutes} : ${secondes}`
}

input.addEventListener("input", function()
{
    if(intervalID == 0)
    {
        intervalID = setInterval(chronoplus, 1000);
    }
})

// fonction pour stopper le chrono avec le bouton STOP
stopbtn.addEventListener("click",defaite);

function defaite()
{
    clearInterval(intervalID);
    lose.style.zIndex = ("2");
    losemsg.innerHTML = `Vous avez trouvé ${charfound} personnages en ${minutes} minutes et ${secondes} secondes`
}

// Lancement du logo fight lorsque l'on commence à taper le 1er nom
input.addEventListener("input", fight)

function fight()
{
    fightimg.classList.add("fightanim")
}

//fonction pour tout remettre à zero avec le bouton reset
btn.addEventListener("click", reset);

function reset()
{
    for (let i = 0 ; i < 46 ; i++)
    {
        char[i].classList.add("hidden");
    }
    clearInterval(intervalID);
    secondes = 0;
    minutes = 0;
    intervalID = 0;
    lose.style.zIndex = ("-1");
    chrono.innerHTML = `${minutes} : ${secondes}`
}

// déclenchement de l'écran victoire quand tous les noms ont été trouvé
