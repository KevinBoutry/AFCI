"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const inputcolor = document.querySelector("#color");
const inputsize = document.querySelector("#size")
var color = "#000000"
var size = 15

inputcolor.addEventListener("input", (e)=> color = e.target.value);
inputsize.addEventListener("input", (e)=> size = e.target.value);

function resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

window.addEventListener("resize", resize);
canvas.addEventListener("mousedown", startd);
canvas.addEventListener("mouseup", stopd);

function startd()
{
    ctx.strokeStyle = `${color}`;
    ctx.lineWidth = size; 
    canvas.addEventListener("mousemove", dessin)
}

function stopd()
{    
    ctx.beginPath();
    canvas.removeEventListener("mousemove", dessin);    
}

function dessin(e)
{
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = `${color}`; 
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);         
    ctx.lineCap = "round";
    ctx.lineWidth = size;
}