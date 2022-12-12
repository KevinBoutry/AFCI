"use strict";

import Balle from "./Balle.js";

const balle = new Balle();

balle.create()

window.addEventListener("click", newball)

function newball()
{
    balle.balle();
    draw()
}

function draw()
{
    var ctx = balle.canvas.getContext("2d");
    ctx.clearRect(0, 0, balle.canvas.width, balle.canvas.height);
    balle.draw();
    requestAnimationFrame(draw)
}

