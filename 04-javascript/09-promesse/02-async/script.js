"use strict";

/*
    Si je souhaite récupérer le tableau dans mon fichier json puis le trier.
    Je me retrouve avec une fonction dans une fonction dans une fonction avec à côté 2 autres fonctiones pour gérer les erreurs.
    C'est ce que on va appeler un callback Hell, des callbacks dans des callbacks, ...
*/

fetch("tab.json").then(res=>{
    if(res.ok)
    {
        res.json().then(data=>{
            tri(data).then(message=>{
                console.log(message,data);
            })
            .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));
    }
})

/*
    Pour éviter ces enfers de callback.
    On a les mots clefs async et await qui entrent en jeu.
    async ne sert qu'à déclarer qu'on va utiliser des await dans la fonction.
    "await" ne peut être utilisé que dans une fonction "async".

    "async" se place devant la déclaration de la fonction.
    "await" se place devant une promesse, et indique au script qu'il doit attendre le résultat de la promesse pour continuer.
*/

async function exemple()
{
    let data;
    // J'attend le résultat de mon fetch pour continuer.
    let resp = await fetch("tab.json");
    // la variable se retrouve avec le paramètre habituellement donnée au .then() alors que sans le await, fetch nous retourner l'objet "Promise"
    console.log(resp);
    if(resp.ok)
    {
        /*
            avec async await , on ne recupere que le .then()
            donc si on a besoin de catch et de finally, on pourra utiliser la structure try catch finally;
        */
        try
        {
            data = await resp.json();
            let message = await tri(data);
            console.log(message, data);
        }
        catch(err)
        {
            console.log(err);
        }
    }
}

exemple()

async function burger()
{
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("Mon burger est terminé");
}

burger()

// FONCTION DU COURS ET EXERCICE PRECEDENT :

function pain2()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("le pain est grillé")},1000
        )
    })
}
function sauce2()
{
    return new Promise(resolve=>{
            resolve("la sauce est versée")}
        )
}
function viande2()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("le viande est cuite")},3000
        )
    })
}
function salade2()
{
    return new Promise(resolve=>{
        resolve("la salade est placée")}
    )
}
function tri(tab){
    return new Promise((resolve, reject)=>{
        tab.sort((a,b)=>{
            if(typeof(a) !== typeof(b)){
                reject("Tous les éléments du tableau ne sont pas de même type.");
            }
            return a-b;
        })
        resolve("Le tableau a été correctement trié");
    });
}

