"use strict";

const jsonurl = ("./hero.json")
const header = document.querySelector("header")
const main = document.querySelector("main")
var select

fetch(jsonurl).then(jsonparse)

function jsonparse(e)
{
    if(e.ok)
    {
        e.json().then(HeroChoice).catch(error=>console.log(error))
    }
    else
    {
        console.log(e.status, e.statusText);
    }
}

function HeroChoice(e)
{
    document.body.innerHTML = 
        `
        <header>
        <input type="checkbox" name="${e.members[0].name}" value="${e.members[0].name}"> ${e.members[0].name}<br>
        <input type="checkbox" name="${e.members[1].name}" value="${e.members[1].name}"> ${e.members[1].name}<br>
        <input type="checkbox" name="${e.members[2].name}" value="${e.members[2].name}"> ${e.members[2].name}
        </header>
        `   
    console.log(e.members[0]);
}




