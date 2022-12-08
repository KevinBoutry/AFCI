"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const inputcolor = document.querySelector("#color");
const inputsize = document.querySelector("#size");
const inputcancel = document.querySelector("#cancel");

var color = "#000000"
var size = 15
var historic = []
var temptab = []
var chist = []
var lhist = []


inputcolor.addEventListener("input", (e)=> color = e.target.value);
inputsize.addEventListener("input", (e)=> size = e.target.value);
inputcancel.addEventListener("click", cancel);
// document.addEventListener("keypress", cancel)


function resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

window.addEventListener("resize", resize);
canvas.addEventListener("mousedown", startd);
canvas.addEventListener("mouseup", stopd);

function startd(e)
{
    ctx.strokeStyle = `${color}`;
    ctx.lineWidth = size; 
    canvas.addEventListener("mousemove", dessin)
}

function dessin(e)
{
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = `${color}`; 
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    temptab.push([e.clientX, e.clientY])
    ctx.lineCap = "round";
    ctx.lineWidth = size;
}

function stopd(e)
{    
    ctx.beginPath();
    historic.push(temptab);
    temptab = []
    chist.push(color)
    lhist.push(size)
    canvas.removeEventListener("mousemove", dessin);    
}

function cancel()
{
    historic.pop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redraw(historic)
}

function redraw(tab)
{
    for (let i = 0; i < tab.length ; i++)
    {
        for(let j = 0; j < tab[i].length ; j++)
        {
            ctx.lineTo(tab[i][j][0],tab[i][j][1]);
            ctx.lineWidth = lhist[i]
            ctx.strokeStyle = `${chist[i]}`
            ctx.stroke();
            ctx.beginPath();           
            ctx.moveTo(tab[i][j][0],tab[i][j][1]);
        }
        ctx.beginPath();
    }
    requestAnimationFrame(redraw);
}
