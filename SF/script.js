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
// var permettant de mettre le chrono à 0
var temps = 0;
// var utilisé pour récupérer l'ID de notre chrono et pouvoir le stopper
var intervalID;

// Fonction vérifiant les noms entrés dans l'input et les comparants avec les id de toutes les vignettes, on eleve l'attirbut hidden de la vignette si un match est trouvé.
input.addEventListener("change", inputTOvar);

function inputTOvar(k)
{
    console.log(k.target.value);
    for (let i = 0 ; i < 45 ; i++)
    {
        if(char[i].id == k.target.value)
        {
            char[i].classList.remove("hidden");
            input.value = ''
            return               
        }
    }   
}

//fonction pour tout remettre à zero avec le bouton reset
for (let i = 0 ; i < 45 ; i++)
{
    btn.addEventListener("click", ()=>char[i].classList.add("hidden")); 
}

btn.addEventListener("click", function()
    {
    clearInterval(intervalID);
       temps = 0;
    })

// fonction gérant le déroulement du chrono
function chronoplus()
{
    chrono.innerText = temps
    temps++
}

input.addEventListener("change", function()
{
    intervalID = setInterval(chronoplus, 1000);
    console.log(intervalID);
})


// fonction pour stopper le chrono avec le bouton STOP
stopbtn.addEventListener("click",()=>clearInterval(intervalID));
