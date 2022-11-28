"use strict";

/*
    Par défaut, toute programmation en javascript est dite "synchrone".
    C'est à dire que tous le fonctionnement de la page et du script s'arrête tant que le code n'a pas terminé de s'executer.
*/

for (let i = 0; i < 100000000; i++) 
{
    if(i=100000000) console.log("boucle synchrone");
}
console.log("Bonjour synchrone");

/*
    Mais JS peut gérer de la programmation asynchrone.
    C'est à dire qu'il continue d'executer du code pendant qu'en parralèlle una autre partie du code s'execute.
*/

fetch("test.json").then(res=>{
    for (let i = 0; i < 100000000; i++) 
{
    if(i=100000000) console.log("boucle asynchrone");
}
})
console.log("Bonjour Asynchrone");

/*
    Une fonction retourne soit quelquechose (chiffre, string, tableau...)
    soit undefined si elle ne retourne rien.
    Il s'avère que fetch retourne une promesse
*/

let request = fetch("test.json")
console.log(request);

/*
    Dans cet objet "promise" on a 3 méthodes principales.
        .then() qui va prendre une fonction callback qui sera appelée une fois la promesse tenue (réussite).
        .catch() qui prend aussi une fonction callback qui sera appelée si la promesse est rejetée (échec).
        .finally() qui prend une fonction callback qui sera appelé quoi qu'il arrive une fois la promesse traitée(échec et réussite).
*/
// recupere en argument la réponse de la requête
request.then(res=>console.log("then :", res))
// recupere en argument l'erreur
request.catch(res=>console.log("catch :", res))
// ne recupere rien en argument
request.finally(res=>console.log("finally :", res))

/*
    Il est possible de résoudre plusieurs promesses en même temps.
    Pour cela on fera appel à la méthode all() de l'objet "promise" à laquelle on donnera un tableau de toutes les promesses que l'on souahite résoudre.
    Une fois toute résolue le then() se lancera en donnant en paramètre un tableau des différents résultats.
*/

let r1= fetch("test.json");
let r2= fetch("test2.json");

Promise.all([r1,r2]).then(res=>{
    console.log(res);
    // Je boucle sur mon tableau de reponse pour toutes les résoudre.
    res.forEach(r=>{
        // Je traite chaques réponses comme je le ferai sur un fetch classique.
        if(r.ok)
        {
            r.json().then(data=>console.log(data));
        }
    })
})

/*
    On trouvera aussi les méthodes "Promise.race()" et "Promise.any()" qui prendront elles aussi un tableau de promesse.
    Mais à la différence de ".all()" elles ne rendront que la plus rapide à s'executer.
    La différence entre "race" et "any" se fait au niveau du ".catch":
        - race lancera le catch si la plsu rapide des promesses echoue.
        -any passera à la promesse suivante tant que la précédente échoue et ne lancera le catch que si elles échouent toute.
*/

/*
    Lorsque l'on crée une promesse, elle prend une fonction callback avec 2 arguments.
    Ces arguments représentent à leurs tours 2 fonctions callback.
    La 1ere representera then
    la 2eme representera catch
*/

let random = new Promise((resolve, reject)=>{
    let r = Math.floor(Math.random()*10);
    if(r<5)
    {
        resolve("r plus petit que 5")
    }
    else
    {
        reject("r plus grand que 5")
    }
});

random.then(res=>console.log("then :", res))
    .catch(res=>console.log("catch :", res))
    .finally(res=>console.log("finally : mon random est terminé"))

// Exemple burger
// 1.sans promesse

function burger1()
{
    pain1();
    sauce1();
    viande1();
    salade1();
    console.log("Le burger est terminé");
}
function pain1()
{
    setTimeout(()=>console.log("Le pain est grillé et placé"), 1000);
}
function sauce1()
{
    console.log("La sauce est versée");
}
function viande1()
{
    setTimeout(()=>console.log("La viande est cuite"),3000);
}
function salade1()
{
    console.log("La salade est placée");
}

burger1()

// 2.avec promesse

function burger2()
{
    pain2().then(pain=>{
        console.log(pain);
        sauce2().then(sauce=>{
            console.log(sauce);
            viande2().then(viande=>{
                console.log(viande);
                salade2().then(salade=>{
                    console.log(salade);
                    console.log("Le burger est terminé");
                })
            })
        })
    })
}
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