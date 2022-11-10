"use strict";

const h1 = document.querySelector('#mainTitle');

// ------------------------------------- l'attribut style -----------------------------------------

/*
    Nos éléments HTML possèdent énormément d'attribut et de propriété
    L'un d'eux est la propriété "style" elle permet de venir ajouter sur un notre élément html, l'attribut style.
    et donc de faire du CSS inline.
    Cela lui donne donc une grande priorité.
    Pour modifier une propriété CSS, on va faire suivre la propriété style du nom de la propriété CSS à changer

    !Attention, les propriétés s'écrivant avec un "-" sont remplacées par une version camelcase
    * exemple : background-color devient backgroundColor
    Vous ne pouvre pas récupérer ainsi le style du fichier css, seulement celui inline.
*/

h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

// !! Attention, certaines erreurs ne provoqueront rien du tout
h1.style.couleur = "red";

//  -------------------------------------- les classes --------------------------------------------

// l'attribut classList permet de récupérer un tableau contenant toutes les classes de l'élément.
console.log(h1.classList);

// classlist.add ajoute une class, classlist.remove supprime une classe
h1.classList.add("banane");
h1.classList.remove("banane");
// classList.toggle ajoute la classe si elle n'est pas présente et la supprime si elle est déjà présente
h1.classList.toggle("banane");
// classList.contains permet de vérifier si une classe est présente
console.log(h1.classList.contains("banane"));
// className retourne un string contenant toutes les classes
console.log(h1.className);

// ------------------------------------ autres attributs ------------------------------------------

// Tous les attributs existant sur un élément html sont accessible via JS.
// La plupart d'entre eux peuvent être accessible en tapant seulement .nomAttribut
console.log(h1.id);
h1.id += "2";

//  Mais on peut aussi y accéder avec getAttribute et setAttribute

console.log(h1.getAttribute("id"));

const a = document.querySelector('footer ul li a');
// setAttribute prend en premier paramètre l'attribut que je souhaite modifier, et en second la valeur que je veux lui donner.
a.setAttribute("target", "_blank");

console.log(a.href, a.target);
// le cas des data-attribut sont particuliers puisqu'on peut les nommer comme on le souhaite.

a.dataset.color = " pink";
a.dataset.bidule = "Nouveau data-attribute";
// On utilise dataset pour accèder aux data-attributes suivi du nom de ce data-attribute (pour en créer un nouveau il suffit de mettre un nom qui n'existe pas)

const aside = document.querySelector("aside");
aside.style.left = ("50vw");
aside.style.top = ("50vh");