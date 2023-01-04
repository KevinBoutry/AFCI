"use strict";

const urlbiens = "./assets/data.json"

const divbiens = document.querySelector("#bienscontent");
const inptype = document.querySelector("#type");
const inplocalisation = document.querySelector("#localisation");
const inpminbudget = document.querySelector("#minbudget");
const inpmaxbudget = document.querySelector("#maxbudget");
const searchbutton = document.querySelector("#search button")

inptype.addEventListener("input", typedebien);
searchbutton.addEventListener("click", ()=>typedebien({target:inptype}))

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
    console.log(inpminbudget.value);

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
            if((inplocalisation.value == maison.ville||inplocalisation.value=="")&&
                (inpminbudget.value<=maison.prix||inpminbudget.value=="")&&
                (inpmaxbudget.value>=maison.prix||inpmaxbudget.value=="")
            )
            {
                let e = document.createElement("div");
                divbiens.append(e)
                e.classList.add("maison")
                e.textContent = maison.titre
                e.style.backgroundImage = `url("./assets/images/immobilier/${maison.photos}")`
            }
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
            if((inplocalisation.value == appart.ville||inplocalisation.value=="")&&
                (inpminbudget.value<=appart.prix||inpminbudget.value=="")&&
                (inpmaxbudget.value>=appart.prix||inpmaxbudget.value=="")
            )
            {                    
                let e = document.createElement("div");
                divbiens.append(e)
                e.classList.add("appart")
                e.textContent = appart.titre
                e.style.backgroundImage = `url("./assets/images/immobilier/${appart.photos}")`
            }
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
            if((inplocalisation.value == terrain.ville||inplocalisation.value=="")&&
                (inpminbudget.value<=terrain.prix||inpminbudget.value=="")&&
                (inpmaxbudget.value>=terrain.prix||inpmaxbudget.value=="")
            )
            {
                let e = document.createElement("div");
                divbiens.append(e)
                e.classList.add("terrain")
                e.textContent = terrain.titre
                e.style.backgroundImage = `url("./assets/images/immobilier/${terrain.photos}")`
            }
        });
    }
}