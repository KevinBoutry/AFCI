"use strict";

// const visant l'input ou l'on rentre le nom des personnages
const input = document.querySelector("input")
// const visant l'ensemble des vignettes de personnages
const char = document.querySelectorAll(".hidden");
// const visant le bouton restart
const restart = document.querySelector("#restart");
// const visant le bouton abandon
const stopbtn = document.querySelector("#stop");
// const visant le chrono
const chrono = document.querySelector("#timer");
// const visant l'image fight
const fightimg = document.querySelector("#fight");
// const visant la div defaite
const lose = document.querySelector("#lose")
// const visant le message de défaite
const losemsg = document.querySelector("#lose p")
// const visant la div victoire
const win = document.querySelector("#win")
// const visant le message de victoire
const winmsg = document.querySelector("#win p")

// var permettant de mettre le chrono à 0
var minutes = 0
var secondes = 0;

// var utilisé pour récupérer l'ID de notre chrono et pouvoir le stopper
var intervalID = 0;

// var stockant le nombre de personnages trouvés
var charfound = 0
// const visant la box achievement girl
const girl = document.querySelector("#girlpower")
// var stockant le nombre de personnages avec class girl
var girlcount = 0
// const visant la box achievement OG
const og = document.querySelector("#OG")
// var stockant le nombre de personnages avec class original
var ogcount = 0


// Fonction vérifiant les noms entrés dans l'input et les comparants avec les id de toutes les vignettes, on eleve l'attirbut hidden de la vignette si un match est trouvé.
input.addEventListener("input", inputTOvar);

function inputTOvar(k)
{
    for (let i = 0 ; i < 46 ; i++)
    {
        if(char[i].innerText == k.target.value.toLowerCase())
        {
            char[i].classList.remove("hidden");
            charfound = charfound + 1;
            input.value = '';
            char[i].innerText = ''
            achievement(char[i])
            // Se déclenche si tous les personnages ont été trouvés
            if (charfound == 46)
            {
                clearInterval(intervalID);
                win.style.display = ("block");
                    winmsg.innerHTML = `Congratulations, you won in ${minutes} minutes and ${secondes} seconds`;
            }
            return               
        }
    }   
}

// fonction gérant le déroulement du chrono
chrono.innerHTML = `${minutes} : 0${secondes}`

function chronoplus()
{
    secondes++;
    if (secondes >= 60)
    {
        secondes = 0;
        minutes++
    }
    chrono.innerHTML = `${minutes} : ${secondes}`
}

input.addEventListener("input", function()
{
    if(intervalID == 0)
    {
        intervalID = setInterval(chronoplus, 1000);
    }
})

// fonction pour stopper avec le bouton ABANDON
stopbtn.addEventListener("click",defaite);

function defaite()
{
    clearInterval(intervalID);
    lose.style.display = ("block");
    losemsg.innerHTML = `You found ${charfound} characters in ${minutes} minutes and ${secondes} seconds`
}

// Lancement du logo fight lorsque l'on commence à taper le 1er nom
input.addEventListener("input", fight)

function fight()
{
    fightimg.classList.add("fightanim")
}

//fonction pour tout remettre à zero avec le bouton reset
restart.addEventListener("click", reset);

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
    lose.style.display = ("none");
    win.style.display = ("none");
    chrono.innerHTML = `${minutes} : ${secondes}`
    charfound = 0
}

function achievement(e)
{
    if(e.classList.contains("original"))
    {
        ogcount = ogcount + 1
        if(ogcount == 8)
        {
            og.style.display = ("block");
        }
    }

    if(e.classList.contains("girl"))
    {
        girlcount = girlcount + 1
        if(girlcount == 16)
        {
            girl.style.display = ("block");
        }
    }
}