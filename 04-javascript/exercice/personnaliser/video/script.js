"use strict";

/*
    Une fois un élément HTML vidéo selectionné, certaines méthodes particulières apparaissent :
    .play() qui lance la vidéo
    .pause() qui met la vidéo en pause.
    .currenTime qui donne ou paramètre le temps de la vidéo en seconde.
    .muted qui est un boolean indiquant si le son de la vidéo est coupé.
    .volume qui prend un chiffre entre 0 et 1 indiquant le volume.
    .controls qui prend un boolean affichant ou non les controls par défaut de HTML5.
    .duration qui indique la durée totale de la vidéo.
    .paused qui est un boolean indiquant si la vidéo est en pause.
    .ended qui est un boolean indiquant si la vidéo est terminée.
*/
import Jauge from "../../exo jauge/Jauge.js";

const video = document.querySelector("video");
const playbutton = document.querySelector("#playbutton");
const menuplay = document.querySelector("#play");
const pausebutton = document.querySelector("#pausebutton");
const menupause = document.querySelector("#pause");
const progressbar = document.querySelector("progress")
const full = document.querySelector("#full")

playbutton.addEventListener("click", playvid);
menuplay.addEventListener("click", playvid);

function playvid()
{
    video.play()
    playbutton.style.display = "none"
    pausebutton.style.display = "block"
    barpourcent()
}

pausebutton.addEventListener("click", pausevid);
menupause.addEventListener("click",pausevid)

function pausevid()
{
    video.pause()
    playbutton.style.display = "block"
    pausebutton.style.display = "none"
}

function barpourcent()
{
    if(video.ended == false)
    {
        var progress = (video.currentTime/video.duration)*100
        progressbar.value = progress
        setTimeout(()=> barpourcent(), "50")
    }
    else
        progressbar.value = 100
}

full.addEventListener("click", fullscreen)

function fullscreen()
{
    if(document.fullscreenElement)
        document.exitFullscreen();
    else
        video.requestFullscreen()
}