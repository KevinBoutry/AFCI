"use strict";

// ------------------------------------ EXO 1 --------------------------------
const div2 = document.querySelector(".div2");
const btn2 = div2.querySelector("button");
const inp2 = div2.querySelector("input");
inp2.addEventListener("input" , ()=>btn2.style.color = inp2.value);
btn2.addEventListener("click" , ()=>btn2.style.backgroundColor = inp2.value);

// ------------------------------------ EXO 2 --------------------------------

const mod = document.querySelector(".modale");
const btn3 = document.querySelector(".div3 button");
const fermer = document.querySelector(".modale button:last-of-type");

btn3.addEventListener("click", ()=>mod.classList.remove("hidden"));
fermer.addEventListener("click", ()=>mod.classList.add("hidden"));

// ------------------------------------- EXO 3 ------------------------------------

const li = document.querySelectorAll("li");

console.log(li);

function switchfont(e)
{
    console.log(e);
if(e.style.fontSize == "2rem")
{
    e.style.fontSize = "1rem"
}
else
{
    e.style.fontSize = "2rem"
}
}

for (let i = 0; i<5; i++)
{
    li[i].addEventListener("click", ()=>switchfont(li[i]) )
        
}        

// ------------------------------- EXO 4 -----------------------------------------

const span = document.querySelector("span");

span.addEventListener("mousemove")