"use strict";

import justePrix from "./justeprix.js";
import slider from "./slider.js";

const select = document.querySelector("#choix")
const appli = document.querySelector(".appli")
select.addEventListener("change", choixjeu)

function choixjeu()
{

    switch(select.value)
    {
        case "justePrix":
            appli.innerHTML = ""
            justePrix.getWin;
            justePrix.create();
            break;
        case "paint":
            appli.innerHTML = ""
            break;
        case "slider":
            appli.innerHTML = ""
            slider.create();
            break;
    }
    
}