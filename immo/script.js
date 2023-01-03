"use strict";

const urlbiens = "./assets/data.json"

const divbiens = document.querySelector("#bienscontent");
const inptype = document.querySelector("#type");
const inplocalisation = document.querySelector("#localisation");
const inpminbudget = document.querySelector("#minbudget");
const inpmaxbudget = document.querySelector("#maxbudget")

inptype.addEventListener("input", typedebien)

function typedebien(val)
{
    divbiens.innerHTML="";
    switch (val.target.value){
        case "tous" :
            showAppart();
            showMaison();
            showTerrain();
            break;
        case "appartement" :
            showAppart();
            break;
        case "maison" :
            showMaison();
            break;
        case "terrain" :
            showTerrain();
            break;
    }
}

function showMaison()
{   
    fetch(urlbiens).then(handleFetch);

    function handleFetch(responseText)
    {
        if(responseText.ok)
        {
            responseText.json()
                .then(showResult)
                .catch(error=>console.log(error))
        }
        else
        {
            console.log(responseText.status, responseText.statusText);
        }
    }

    function showResult(data){
        data.maison.forEach(maison => {
            let e = document.createElement("div");
            divbiens.append(e)
            e.classList.add("maison")
            e.textContent = maison.titre
            e.style.backgroundImage = `url("./assets/images/immobilier/${maison.photos}")`
        });

    }
}

function showAppart()
{   
    fetch(urlbiens).then(handleFetch);

    function handleFetch(responseText)
    {
        if(responseText.ok)
        {
            responseText.json()
                .then(showResult)
                .catch(error=>console.log(error))
        }
        else
        {
            console.log(responseText.status, responseText.statusText);
        }
    }

    function showResult(data){
        data.appartement.forEach(appart => {
            let e = document.createElement("div");
            divbiens.append(e)
            e.classList.add("appart")
            e.textContent = appart.titre
            e.style.backgroundImage = `url("./assets/images/immobilier/${appart.photos}")`
        });

    }
}

function showTerrain()
{   
    fetch(urlbiens).then(handleFetch);

    function handleFetch(responseText)
    {
        if(responseText.ok)
        {
            responseText.json()
                .then(showResult)
                .catch(error=>console.log(error))
        }
        else
        {
            console.log(responseText.status, responseText.statusText);
        }
    }

    function showResult(data){
        data.terrain.forEach(terrain => {
            let e = document.createElement("div");
            divbiens.append(e)
            e.classList.add("terrain")
            e.textContent = terrain.titre
            e.style.backgroundImage = `url("./assets/images/immobilier/${terrain.photos}")`
        });

    }
}
