"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let px = 100
let py = 200
let vitV = 3
let vitH = 2
let R = 25

function Dessine()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(px, py, R, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();    

    if (px + R > canvas.width || px - R < 0)
    {
        vitV = -vitV
    }

    if (py + R > canvas.height || py - R < 0)
    {
        vitH = -vitH
    }

    px = px + vitV
    py = py + vitH

    // requestAnimationFrame va appeler la foncion donnée en argument au rythme optimal pour une animation
    requestAnimationFrame(Dessine);
}

Dessine()


