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
// const visant la partie score
const score = document.querySelector("#score")
// const visant la partie intro
const intro = document.querySelector(".intro")
// const visant le bouton close de la partie intro
const closintro = document.querySelector(".intro button")


//var visant le score enregistré en local storage
var HSC = localStorage.getItem("characters");
var HSM = localStorage.getItem("minutes");
var HSS = localStorage.getItem("secondes");    

// var permettant de mettre le chrono à 0
var minutes = 0
var secondes = 0;

// var utilisé pour récupérer l'ID de notre chrono et pouvoir le stopper
var intervalID = 0;

// var stockant le nombre de personnages trouvés
var charfound = 0
// var stockant le nombre de personnages avec class girl
var girlcount = 0
// var stockant le nombre de personnages avec class original
var ogcount = 0
// var stockant le nombre de personnages avec class bald
var baldcount = 0
// var stockant le nombre de personnages avec class boss
var bosscount = 0
// var stockant le nombre de personnages avec class blond
var blondcount = 0

// Fonction vérifiant les noms entrés dans l'input et les comparants avec les id de toutes les vignettes, on eleve l'attirbut hidden de la vignette si un match est trouvé.
input.addEventListener("input", inputTOvar);

function inputTOvar(k)
{
    for (let i = 0 ; i < 46 ; i++)
    {
        if(char[i].innerText != '')
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
    losemsg.innerHTML = `You found ${charfound} characters in ${minutes} minutes and ${secondes} seconds`;
    console.log(HSC , charfound);
    if(HSC < charfound){
        console.log(score, HSC, HSM, HSS);
        localStorage.setItem("characters", `${charfound}`);
        localStorage.setItem("minutes", `${minutes}`);
        localStorage.setItem("secondes", `${secondes}`)
    }
    HSC = localStorage.getItem("characters");
    HSM = localStorage.getItem("minutes");
    HSS = localStorage.getItem("secondes");    
    score.innerText = `High Score : ${HSC} characters in ${HSM} minutes and ${HSS} seconds`
    console.log(score, HSC, HSM, HSS);
}

score.innerText = `High Score : ${HSC} characters in ${HSM} minutes and ${HSS} seconds`

// Lancement du logo fight lorsque l'on commence à taper le 1er nom
input.addEventListener("input", fight)

function fight()
{
    fightimg.classList.add("fightanim")
}

//fonction pour refresh la page avec le bouton restart
restart.addEventListener("click", ()=>window.location.reload());


//fonction verifiant si un achievement est atteint et gérant son affichage
function achievement(e)
{
    // const visant toute la partie achievement
    const ach = document.querySelector("#achievement")
    // const visant la 1ere div achievement
    const achdiv1 = document.querySelector("#achievement div:nth-of-type(1)")
    
    if(e.classList.contains("original"))
    {
        ogcount = ogcount + 1
        if(ogcount == 8)
        {
            let og = document.createElement("div");
            ach.insertBefore(og, achdiv1);
            og.innerHTML =
            `
            <h3>Old School</h3>
            <img src="./ressources/image/SF2logo.png" alt="">
            <p>You found all members of SF2 original cast</p>
            `
        }
    }

    if(e.classList.contains("girl"))
    {
        girlcount = girlcount + 1
        if(girlcount == 16)
        {
            let girl = document.createElement("div");
            ach.insertBefore(girl, achdiv1);
            girl.innerHTML =
            `
            <h3>Girl Power !</h3>
            <img src="./ressources/image/sfgirl.png"  alt="">
            <p>You found all female characters</p>
            `
        }
    }

    if(e.classList.contains("bald"))
    {
        baldcount = baldcount + 1
        if(baldcount == 3)
        {
            let bald = document.createElement("div");
            ach.insertBefore(bald, achdiv1);
            bald.innerHTML =
            `
            <h3>Zidane</h3>
            <img src="./ressources/image/Zizou.jpg" alt="">
            <p>You found all bald characters, Zizou approuves</p>
            `
        }
    }

    if(e.classList.contains("boss"))
    {
        bosscount = bosscount + 1
        if(bosscount == 4)
        {
            let boss = document.createElement("div");
            ach.insertBefore(boss, achdiv1);
            boss.innerHTML =
            `
            <h3>The Four Horsemen</h3>
            <img src="./ressources/image/sf2boss.png" alt="">
            <p>The original badguys</p>
            `
        }
    }

    if(e.classList.contains("blond"))
    {
        blondcount = blondcount + 1
        if(bosscount == 17)
        {
            let blond = document.createElement("div");
            ach.insertBefore(blond, achdiv1);
            blond.innerHTML =
            `
            <h3>Blond fighters</h3>
            <img src="" alt="">
            <p></p>
            `
        }
    }
    // const obsoptions =
    // {

    // }

    // const observer = new IntersectionObserver(setIndicator, obsoptions)

    // const achdiv = document.querySelectorAll("#achievement div")
    // console.log(achdiv);
    // observer.observe(achdiv[2])

    // function setIndicator(entries)
    // {
    //     console.log(entries);
    // }
}

// Fonction pour fermer la fenetre d'intro

closintro.addEventListener("click",()=>intro.classList.add("hidden"));



