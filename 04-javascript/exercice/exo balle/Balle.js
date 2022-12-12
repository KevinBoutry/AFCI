"use strict";

export default class Balle
{
    canvas;
    rayon;
    posX;
    posY;
    couleur;
    vitH;
    vitV;

    create()
    {
        const canvas = document.createElement("canvas");
        document.body.append(canvas);
        // canvas.addEventListener("click", this.balle);     
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.canvas = canvas;        
    }    

    get getRayon()
    {
        this.rayon = Math.floor(Math.random() * 100);   
    }

    get getPosX()
    {
        this.posX = this.rayon + Math.floor(Math.random() * (window.innerWidth-this.rayon*2));
    }

    get getPosY()
    {
        this.posY = this.rayon + Math.floor(Math.random() * (window.innerHeight-this.rayon*2));
    }

    get getCouleur()
    {
        this.couleur = "#"+Math.floor(Math.random()*16777215).toString(16);
    }

    get getVitV()
    {
        this.vitV = Math.floor(Math.random() * 3);   
    }

    get getVitH()
    {
        this.vitH = Math.floor(Math.random() * 3);
    }

    balle()
    {
        this.getRayon;
        this.getPosX;
        this.getPosY;
        this.getCouleur;
        this.getVitV;
        this.getVitH;
    }

    draw()
    {
        var ctx = this.canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.rayon, 0, 2*Math.PI);
        ctx.fillStyle = `${this.couleur}`;
        ctx.fill();
        ctx.stroke();

        if (this.posX + this.rayon > this.canvas.width || this.posX - this.rayon < 0)
        {
            this.vitV = -this.vitV
        }
            
        if (this.posY + this.rayon > this.canvas.height || this.posY - this.rayon < 0)
        {
            this.vitH = -this.vitH
        }
            
        this.posX = this.posX + this.vitV
        this.posY = this.posY + this.vitH

    }
}