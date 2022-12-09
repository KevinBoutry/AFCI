"use strict";

// Objet contenant le jeu Juste Prix
const justePrix = 
{
    // Propriété contenant le chiffre à trouver
    win : 50,

    // Genere un chiffre aléatoire entre 1 et 100 pour win
    get getWin()
    {
        return this.win = Math.round(Math.random()*100)
    },

    // Creation des éléments du jeu
    create()
    {
        const h1 = document.createElement("h1").textContent = "Entrez un Chiffre entre 1 et 100 :";
        const input = document.createElement("input");
        const p = document.createElement("p");
        const appli = document.querySelector(".appli");
        appli.append(h1, input, p);
        document.head.innerHTML += '<link rel="stylesheet" href="justeprix.css">';
        input.addEventListener("change",()=>
        {
            if(input.value > this.win)
            {
                p.textContent = "C'est plus petit !"
                input.value=""
            }
            else if(input.value < this.win)
            {
                p.textContent = "C'est plus grand !"
                input.value=""
            }
            else
            {
                p.textContent = "VICTOIRE !"
                input.value=""
            }
        })            
    },
}

export default justePrix;