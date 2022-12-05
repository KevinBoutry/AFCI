"use strict";

export default function slider(tab)
{
    var index = 2

    for(let i=0 ; i<tab.length ; i++)
    {        
        const d = document.createElement("div")
        const e = document.createElement("div")
        document.body.append (d,e)
        d.innerHTML = `<img src="${tab[i]}" alt="">`
        e.innerHTML = "<button></button>"
        d.classList.add("slider")
        e.classList.add("bouton")
        e.addEventListener("click",()=>{
            index = index + 1;
            d.style.zIndex = (`${index}`);
        })
    }
}
