"use strict";

var choix = document.querySelector("#themsel");

var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

choix.addEventListener("input", themechange)

function themechange()
{
    if(choix.selectedIndex == 0)
    {
        document.documentElement.style.setProperty("--fond","antiquewhite");
        document.documentElement.style.setProperty("--text","#333");
        localStorage.setItem("selecteur", "0")
    }
    else if(choix.selectedIndex == 1)
    {   
        document.documentElement.style.setProperty("--fond","#333");
        document.documentElement.style.setProperty("--text","antiquewhite");
        localStorage.setItem("selecteur", "1")
    }
    else if(choix.selectedIndex == 2)
    {
        document.documentElement.style.setProperty("--fond","blue");
        document.documentElement.style.setProperty("--text","yellow");
        localStorage.setItem("selecteur", "2")
    }
    else if(choix.selectedIndex == 3)
    {
        document.documentElement.style.setProperty("--fond",`#${randomColor}`);
        document.documentElement.style.setProperty("--text",`#${randomColor2}`);
        localStorage.setItem("selecteur", "3")
    }
}

console.log(localStorage.getItem("selecteur"));

choix.selectedIndex = localStorage.getItem("selecteur")

console.log(choix.selectedIndex);
themechange()