"use strict";

const carte = document.querySelector("#card")
carte.addEventListener("click",animkb)

const kbcard = `
    <div id="KB_div">
        <div id="KB_PN"></div>
        <div id="KB_MM"></div>
        <div id="KB_danse"></div>
        <div id="KB_MC"></div>
        <div id="KB_text">C'EST BIENTOT NOEL</div>
    </div>
`

const carddefault =`
Insérer HTML par défaut
`

function animkb()
{
    carte.innerHTML = kbcard;
    carte.classList.add("kbcardopen");
    carte.removeEventListener("click",animkb);
    carte.style.position = "absolute"
    carte.addEventListener("click",()=>{
        carte.innerHTML = carddefault;
        carte.classList.remove("kbcardopen");
        carte.addEventListener("click",animkb);
        carte.style.position = "relative"
    })
}