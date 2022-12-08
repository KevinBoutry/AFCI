"use strict";

const slider = {

    // Propriété contentant l'ensemble des images
    img : ["./image/image1.webp", "./image/image2.webp", "./image/image3.webp",],

    index : 0,

    create()
    {   

        document.head.innerHTML += '<link rel="stylesheet" href="slider.css">';
        const d = document.createElement("div")
        const e = document.createElement("div")
        const appli = document.querySelector(".appli");
        appli.append (d,e)
        d.innerHTML = `<img src="./image/image1.webp" alt="">`
        e.innerHTML = "<button></button>"
        d.classList.add("slider")
        e.classList.add("bouton")
        
    }
}

export default slider;