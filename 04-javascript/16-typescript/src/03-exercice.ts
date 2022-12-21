/*
    Faire fonctionner le compteur de la partie 1
*/

const btn8 = <HTMLButtonElement> document.querySelector("#compte");
let n: number = 0;
btn8.addEventListener("pointerdown", ()=>{
    n++;
    btn8.textContent = n.toString();
})