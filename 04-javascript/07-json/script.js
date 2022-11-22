"use strict";

const form = document.querySelector("form")

form.addEventListener("submit", saveData);

function saveData(e)
{
    // J'empeche le chargement de la page lors de la soumission du formulaire.
    e.preventDefault();
    // Je transfère les données de mon formulaire à l'objet FormData.
    const data = new FormData(form);
    // Je déclare un objet vide
    let user = {}
    // Un forEach sur data me permet de récupérer les valeurs et noms de mes champs.
    data.forEach((value, name)=>{
        // console.log(value, name);
        user[name] = value;
    })
    showUser(user);
    const strUser = JSON.stringify(user);
    localStorage.setItem("user", strUser);
}

function showUser(u)
{
    const h1 = document.querySelector("h1");
    h1.textContent = `Je suis ${u.prenom}, ${u.age} ans !`
}

const userString = localStorage.getItem("user");
if(userString)
{
    // console.log(userString);
    // JSON.parse() permet de transformer un string JSON en objet ou tableau javascript.
    const user = JSON.parse(userString);
    // console.log(user);
    showUser(user);
}