"use strict";

// --------------------------------------------- EXO 1 -----------------------------------------------

const p = document.querySelectorAll("main p");
const optionp = 
{
    threshold: 0.5
}

const observep = new IntersectionObserver(pindicator, optionp);

p.forEach((piteration)=>observep.observe(piteration))

function pindicator(e)
{
    for (let i = 0 ; i<e.length ; i++)
    {        
        if(e[i].isIntersecting)
        {
            e[i].target.style.opacity = ("1")
            observep.unobserve(e[i].target)
        }
    }    
}

const lastp = document.querySelector("main p:last-of-type");
const optionlastp =
{}

const observelastp = new IntersectionObserver(lastpindicator, optionlastp);
observelastp.observe(lastp)

function lastpindicator(e)
{
    console.log(e);
}