"use strict";
/*
    Faire fonctionner le compteur de la partie 1
*/
const btn8 = document.querySelector("#compte");
let n = 0;
btn8.addEventListener("pointerdown", () => {
    n++;
    btn8.textContent = n.toString();
});
