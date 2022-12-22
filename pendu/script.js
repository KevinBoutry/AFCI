"use strict";

const button = document.querySelectorAll("button");
const motdiv = document.querySelector("#mot");
const tiretdiv = document.querySelector("#tiret");
const erreurdiv = document.querySelector("#erreurs");
const defaite = document.querySelector("#defaite");
const victoire = document.querySelector("#victoire");
const restart = document.querySelector("#restart");
const indicediv = document.querySelector("#indice");

var mot = ""
var indice = ""
var error = 0;
var hitnumber = 0;
erreurdiv.innerHTML = `${error}`
var lettre = ""
var hit = false

const url = "./theme.json"
fetch(url).then(handleFetch);

function handleFetch(reponse)
{
    if(reponse.ok)
    {
        reponse.json()
        .then (randommot)
        .catch(error=>console.log(error))
    }
    else
        console.log(reponse.status, reponse.statusText);
}

function randommot(data)
{
    let randthem = Math.floor(Math.random() * data.length);    
    let randlet = Math.floor(Math.random() * data[randthem].Listes.length);
    let rand = Math.floor(Math.random() * data[randthem].Listes[randlet].Mots.length);
    mot = `${data[randthem].Listes[randlet].Mots[rand]}`.toUpperCase();
    indice = `${data[randthem].Theme_}`.toUpperCase();
    if (mot == "UNDEFINED")
        randommot(data)
    console.log(mot);
    indicediv.textContent += indice
    create()
}

function create()
{
    for (let i = 0; i < mot.length ; i++)
    {
        const d = document.createElement("div");
        const d2 = document.createElement("div");
        d.classList.add("lettre");
        d.classList.add("cache");
        d2.classList.add("tiret");
        motdiv.append(d);
        tiretdiv.append(d2);
        d.textContent = `${mot[i]}`;
    }
}

button.forEach(e => {e.addEventListener("click", clicbouton)})

function clicbouton(e)
{
    lettre = e.target.textContent;
    e.target.style.backgroundColor = "grey"
    e.target.removeEventListener("click", clicbouton);
    verifmot()
}

function verifmot()
{
    const div = document.querySelectorAll("#mot div")
    for (let i = 0; i < mot.length ; i++)
    {
         if(mot[i] == lettre)
        {
            div[i].classList.remove("cache");
            hitnumber++
            hit = true
        }
    }
    if(hit == false)
    {
        error++;
        erreurdiv.innerHTML = `${error}`;
    }
    hit = false
    vicdef()
}

function vicdef()
{
    if(error == 7)
    {
        const d = document.createElement("div");
        document.body.append(d);
        d.classList.add("resultat");
        d.textContent = `VOUS AVEZ PERDU, le mot était ${mot}`;
        d.style.backgroundColor = "red";
    }
    else if(hitnumber == mot.length)
    {
        const d = document.createElement("div");
        document.body.append(d);
        d.classList.add("resultat");
        d.textContent = `VOUS AVEZ GAGNÉ, le mot était ${mot}`;
        d.style.backgroundColor = "green";
    }
}

restart.addEventListener("click", ()=>window.location.reload())