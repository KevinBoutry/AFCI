"use strict";

function test(e)
{
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/*
    On peut ajouter un écouteur d'évènement grâce à la méthode ".addEventListener"
    Celle ci se met à la suite de l'élément HTML que l'on souhaite écouter.
    Elle prendra en 1er paramètre un string avec le nom de l'événement en minuscule et en 2nd argument uen fonction callback.
*/
h1.addEventListener("click", test);
// removeEventListener ne fonctionne qu'avec une fonction callback nommé.
h1.removeEventListener("click", test);
// On peut aussi mettre en fonction anonyme.
h1.addEventListener("mouseover", function(e){
    let r = Math.floor(Math.random()*360);
    /*
        La cible de l'évènement (event.target) n'est pas forcément celle sur laquelle on écoute l'évènement, cela peut aussi être ses enfants.
    */
    e.target.style.transform = `rotate(${r}deg)`;
    // Si je souhaite être sûr que l'évènement se déroule sur l'élément que j'écoute, 2 possibilités:
    // Je peux tout simplement reprendre mon élément :
    h1.style.color = "red";
    // Ou alors utiliser le mot clef "this"
    this.style.backgroundColor = "pink";
    console.log(this);
})
// !Attention, this peut varier, par exemple avec une fonction fléché
h1.addEventListener("mousemove", e=>console.log(this));
/*
    Les événements peuvent être ajoutés directement en attribut d'un élément HTML.
    Que ce soit dans le HTML (voir menu 2 dans le HTML) ou via JavaScript
*/
const menu1 = document.querySelector('.menu1');
menu1.onclick = test;
/*
    On peut ajouter autant d'écouteur qur un même évènement que l'on souhaite avec addEventListener.
    Mais avec les onEvent, l'attribut ne peut recevoir qu'un seul événement, il effacera alors le précédent.
*/
menu1.onclick = e=>{
    if(e.target.style.fontSize == "2rem"){
        e.target.style.fontSize = "";
    }
    else{
        e.target.style.fontSize = "2rem";
    }
}

//  -------------------------------------------- Event pour input ----------------------------------

const div1 = document.querySelector('.div1');
const inp1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');

function textChange(e){
    // Sur un input, l'attribut value contient ce qu'on y a entré
    console.log(e.target.value);
    if(e.target.value != "")
    {
        btn1.textContent = e.target.value;
        return;
    }
    btn1.textContent = "Clique moi !!!!!";
}
// L'événement change s'active une fois l'input totalement validé
// inp1.addEventListener("change", textChange);
// L'événement input s'active à chaques entrées dans l'input.
inp1.addEventListener("input", textChange);

// -------------------------------------- Options --------------------------------------------------------
/*
    On peut ajouter en 3eme argument de addEventLister un object contenant des options.
    par exemple "once" qui prend un boolean, qui si il est true ne permettra d'enclencher l'événement qu'une seule fois.
*/

btn1.addEventListener(
    "click", // 1er argument l'événement
    ()=>h1.textContent = inp1.value, // 2nd argument la fonction
    {once:true} //3eme argument les options
    )

const div4 = document.querySelector('.div4');
const gp = document.querySelector('.grandParent');
const pa = document.querySelector('.parent');
const en = document.querySelector('.enfant');
/*
    Par défaut, si un évènement enclenche plusieurs écouteurs.
    Une phase de bulle s'enclenchera (bubbling phase).
    C'est à dire que les évènement les plus proches commenceront puis ceux du parent, puis du grand parent...

    Masi avant la pahse de bulle, il y a une pahse dite de capture. Celle ci vérifie les événements sans les déclencher.
    Mais on peut préciser à un événement de se déclencher pendant cette phase.
    En ajoutant l'option "capture" à true, 
*/
div4.addEventListener("click", ()=>console.log("from div4"),{capture:true});
gp.addEventListener("click", ()=>console.log("from grandParent"));
pa.addEventListener("click", (event)=>{
    ()=>console.log("from parent");
    event.stopPropagation();
    /*
        La méthode d'évènement stopPropagation permet d'arrêter le déclenchement des évènements parents.
        Ici on arrête la propagation fans la div "parent".
        l'évènement n'ira donc pas se propager à la div "grandParent"
    */
})
en.addEventListener("click", ()=>console.log("from enfant"));
/*
    Si la pahse de bulle est ascendante, (de l'enfant au parent) la phase de capture est descendante (du parent à l'enfant).
*/

const menu5 = document.querySelector('.menu5 a');
/*
    Les événements de pointer regroupent les événement au clique et ceux au toucher d'appreil tactile.

    preventDefault() permet de bloquer les actions par défaut d'un évènement.
    Par exemple le changement de page d'un lien, la soumission d'un formulaire...
*/
menu5.addEventListener("pointer", e=>e.preventDefault());




