"use strict";

const mot = "POMPIER";
var error = 0;
var hitnumber = 0;
const button = document.querySelectorAll("button");
const motdiv = document.querySelector("#mot");
const tiretdiv = document.querySelector("#tiret");
const erreurdiv = document.querySelector("#erreurs");
const defaite = document.querySelector("#defaite");
const victoire = document.querySelector("#victoire")
erreurdiv.innerHTML = `${error}`
var lettre = ""
var hit = false

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

for (let i = 0; i<26;i++)
{
    button[i].addEventListener("click",()=>{
        lettre = button[i].textContent;
        verifmot()
    })
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
            console.log(hitnumber);
            hit = true
        }
    }
    console.log(hit);
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
        defaite.style.display = "flex"
    }
    else if(hitnumber == mot.length)
    {
        victoire.style.display = "flex"
    }
}