"use strict";

// -------------------------------------------------- EXO 1 ---------------------------------------------------------

function compare(x, y) {
    return x - y;
}

var tableau = [1,75,8]

const input = document.querySelector("input");
input.addEventListener("change", (e)=>tableau.push(e.target.value));
const button = document.querySelector("button")
button.addEventListener("click", tri)

console.log(tableau);

function tri()
{
    let test = new Promise((resolve, reject)=>{
        if(typeof(tableau[0])==typeof(tableau[1]))
        {
            resolve(tableau.sort(compare))
        }
        else
        {
            reject("Impossible de trier plusieurs types différents")
        }
    })
    test.then(res=>console.log("then :", res))
        .catch(res=>console.log("catch :", res))
}


// -------------------------------------------------- EXO 2 ---------------------------------------------------------

const fvert = document.querySelector("#feu div:nth-of-type(3)")
const frouge = document.querySelector("#feu div:nth-of-type(1)")
const forange = document.querySelector("#feu div:nth-of-type(2)")

function feu()
{
    green().then(()=>{
        orange().then(()=>{
            red().then(()=>feu())   
        })
    })
}

function green()
{
    fvert.classList.add("green");
    return new Promise(resolve=>{   
        setTimeout(()=>resolve(fvert.classList.remove("green")), 3000);
    })
}

function red()
{
    frouge.classList.add("red");
    return new Promise(resolve=>{
        setTimeout(()=>resolve(frouge.classList.remove("red")), 2000);
    })
}

function orange()
{
    forange.classList.add("orange");
    return new Promise(resolve=>{
        setTimeout(()=>resolve(forange.classList.remove("orange")), 1000);
    })
}

feu()