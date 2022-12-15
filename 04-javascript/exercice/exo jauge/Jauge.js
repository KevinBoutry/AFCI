"use strict";

export default class Jauge extends HTMLElement
{
   constructor()
   {
        super();
        this.create();
        this.jauge();
        this.initStyle();
   }

   circle;
   input;
   pourcent;
   diam;

   create()
   {
    const p = document.createElement("div");
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    this.circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    this.input = document.createElement("input")
    this.circle.setAttribute("cx", "50%");
    this.circle.setAttribute("cy", "50%");
    this.circle.setAttribute("r", "150px");
    this.shadow = this.attachShadow({mode:"open"});
    this.shadow.append(p);
    this.shadow.append(this.input)
    p.append(svg);
    svg.append(this.circle);
    console.log(this.circle.getBBox());
    this.diam = this.circle.getBoundingClientRect().height;
    console.log(this.circle.getBoundingClientRect());
    console.log(this.diam);
    this.input.addEventListener("input", this.jauge.bind(this))
   }

   jauge()
   {
    var perim = this.diam*Math.PI
    console.log(perim);
    this.pourcent = this.input.value*perim/100
    this.circle.style.strokeDasharray = `${this.pourcent},${perim}`
    if(this.input.value < 25)
    {
        this.circle.style.stroke = "red"
    }
    else if(this.input.value < 50)
    {
        this.circle.style.stroke = "orange"
    }
    else if(this.input.value < 75)
    {
        this.circle.style.stroke = "yellow"
    }
    else{
        this.circle.style.stroke = "green"
    }
   }

   initStyle()
   {
       const style = document.createElement("style");
       this.shadow.append(style);
       style.textContent = /* CSS */
       `
       div{
            height: 100vh;
            width: 100vw;
        }
    
        svg{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width : 100vw;
            height: 100vh;
        }
        
        circle{
            stroke-width: 25px;
            transform-origin: center;
            transform: rotate(-90deg);
        }
        
        input{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            width: 50px;
            color: white;
            background-color: black;
            font-size:2rem
        }
       `
   }
}
customElements.define("jauge-pourcent", Jauge)