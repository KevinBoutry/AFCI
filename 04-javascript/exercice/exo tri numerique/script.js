"use strict";

function tri(x , y)
{
    return x - y;
}


let i;
let input;
let n =[]

for (i ; input != 0 ; i++)
{
    input = parseInt(prompt("Entrez un chiffre"));
    n.push(input);      
    console.log(n);
}

n.pop();
n.sort(tri);
alert(`Voici la liste des nombres triés : ${n}`)