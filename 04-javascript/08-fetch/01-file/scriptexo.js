"use strict";

const jsonurl = ("./hero.json")
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
    for(let i = 0; i < e.members.length; i++)
    {
        const m = document.createElement("li");
        document.body.append(m);
        m.innerHTML = `<input type="checkbox" name="${e.members[i].name}" value="${e.members[i].name}"> ${e.members[i].name}<br>`;
        const mm = document.createElement("div");
        document.body.append(mm);
        mm.innerHTML=
        `
        Nom : ${e.members[i].name}<br>
        Age : ${e.members[i].age}<br>
        Identité secrete : ${e.members[i].secretIdentity}<br>
        Pouvoirs : ${e.members[i].powers}
        `
        mm.style.marginTop = ("15px")
        // mm.style.display = ("none")

        console.log(mm);

        const input = document.querySelectorAll("input")
        if(input[i].checked)
        {
            mm.style.display = ("block")
        }

    }
}

