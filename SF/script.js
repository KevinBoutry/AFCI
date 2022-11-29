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

// const vérifiant si le son est mute
var muted = false
// Son qui se joue lorsqu'un personnage est trouvé.
const coin = new Audio("./ressources/son/coin.mp3")
// Son qui se joue lorsqu'on tape le 1er nom.
const fightsound = new Audio("./ressources/son/fight.mp3")
// Son qui se joue lorsqu'un achievement est débloqué
const achivsound = new Audio("./ressources/son/achiv.mp3")


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

// Fonction vérifiant les noms entrés dans l'input et les comparants avec les id de toutes les vignettes, on eleve l'attribut hidden de la vignette si un match est trouvé.
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
                if(muted == false)
                {
                    coin.play();
                }    
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
    if(HSC < charfound){
        localStorage.setItem("characters", `${charfound}`);
        localStorage.setItem("minutes", `${minutes}`);
        localStorage.setItem("secondes", `${secondes}`)
    }
    HSC = localStorage.getItem("characters");
    HSM = localStorage.getItem("minutes");
    HSS = localStorage.getItem("secondes");    
    score.innerText = `High Score : ${HSC} characters in ${HSM} minutes and ${HSS} seconds`
}

if(HSM != null || HSS != null)
{
score.innerText = `High Score : ${HSC} characters in ${HSM} minutes and ${HSS} seconds`
}

// Lancement du logo fight lorsque l'on commence à taper le 1er nom
input.addEventListener("input", fight)

function fight()
{
    fightimg.classList.add("fightanim")
    if(minutes == 0 && secondes == 0 && muted == false)
    {
    fightsound.play()
    }
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
            if(muted == false)
            {
                achivsound.play()
            }
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
            if(muted == false)
            {
                achivsound.play()
            }
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
            if(muted == false)
            {
                achivsound.play()
            }
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
            if(muted == false)
            {
                achivsound.play()
            }
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
            if(muted == false)
            {
                achivsound.play()
            }
        }
    }
}

// Fonction pour fermer la fenetre d'intro

closintro.addEventListener("click",()=>intro.classList.add("hidden"));

// fonction pour mute/demute le son

const vfx = document.querySelector("header p");
vfx.addEventListener("click", mute)

function mute()
{
    if(muted == false)
    {
        muted = true
        vfx.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>  Play Sound'
    }
    else
    {
        muted = false
        vfx.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>  Mute Sound'
    }
}



