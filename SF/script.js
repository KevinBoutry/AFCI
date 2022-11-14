"use strict";

const input = document.querySelector("input")
const char = document.getElementsByClassName("hidden");
const btn = document.querySelector("#btn");
var k;

console.log(char);

function inputTOvar(k)
{
    console.log(k.target.value);
    for (let i = 0 ; i < 55 ; i++)
    {
        console.log(char[i].id);
        if(char[i].id = k.target.value)
        {
            char[i].classList.remove("hidden")
        }
    }    
}
input.addEventListener("change", inputTOvar);

for (let i = 0 ; i < 150 ; i++)
{
btn.addEventListener("click", ()=>char[i].classList.toggle("hidden"));
}
