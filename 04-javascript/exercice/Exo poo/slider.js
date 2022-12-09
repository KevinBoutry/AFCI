"use strict";

const slider = {

    create(img)
    {   
        for(let i = 0; i < img.length; i++)
        {
            document.head.innerHTML += '<link rel="stylesheet" href="slider.css">';
            const d = document.createElement("div")
            const e = document.createElement("div")
            const appli = document.querySelector(".appli");
            appli.append (d,e);
            d.innerHTML = `<img src="${img[i]}" alt="">`;
            e.innerHTML = "<button></button>";
            d.classList.add("slider");
            e.classList.add("bouton");
        }       
    }
}

export default slider;