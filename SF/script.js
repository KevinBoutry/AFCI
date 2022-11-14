"use strict";

const input = document.querySelector("input")
const char = document.querySelectorAll(".hidden");
const btn = document.querySelector("#btn");

input.addEventListener("change", inputTOvar);

function inputTOvar(k)
{
    console.log(k.target.value);
    for (let i = 0 ; i < 45 ; i++)
    {
        console.log(char[i].id);
        console.log(char[i].id == k.target.value);
        if(char[i].id == k.target.value)
        {
            char[i].classList.remove("hidden")
            return       
        }
    }   
}

for (let i = 0 ; i < 45 ; i++)
{
btn.addEventListener("click", ()=>char[i].classList.toggle("hidden"));
}
