"use strict";

const prenom = document.querySelector("#prenom")
const precont = document.querySelector("#precont")
const nomcont = document.querySelector("#nomcont")
const trait = document.querySelector("#trait")
const nom = document.querySelector("#nom")
const body = document.querySelector("body")


body.addEventListener("click", animnom)


async function animnom()
{
    
    const keyframes = [
        {left: "200px"},
        {left: "0" }
    ];
    const options = {
        duration : 3000,
    };

    let prenanim = prenom.animate(keyframes, options)

    const keyframes2 = [
        {right: "260px"},
        {right: "0" }
    ];
    const options2 = {
        duration : 3000,
    };

    nom.animate(keyframes2, options2)

    await prenanim.finished;
    animwebdev();
}

async function animwebdev()
{
    prenom.textContent = "DEVELOPPEUR"
    nom.textContent = "WEB"
    precont.style.width = "450px"
    nom.style.width="150px"


    const keyframes = [
        {left: "450px"},
        {left: "0" }
    ];
    const options = {
        duration : 3000,
        fill: "forwards",
    };

    let prenanim2 = prenom.animate(keyframes, options);

    const keyframes2 = [
        {right: "150px"},
        {right: "0" }
    ];
    const options2 = {
        duration : 3000,
        fill: "forwards",
    };

    nom.animate(keyframes2, options2)

    await prenanim2.finished;
    fadeout();
}

function fadeout()
{
    const keyframes = [
        {opacity: "100%"},
        {opacity: "0" }
    ];
    const options = {
        duration : 3000,
        fill: "forwards",
    };

    prenom.animate(keyframes, options);
    nom.animate(keyframes, options);
    trait.animate(keyframes, options);
}
