"use strict";

const url = "https://random-d.uk/api"

const canard = document.querySelector("#canard")
const bouton = document.querySelector("button")

bouton.addEventListener("click", coincoin)

function coincoin(e)
{
    fetch(url)
}