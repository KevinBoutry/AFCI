"use strict";

// getElementByTagName retourne une collection (tableau) d'éléments html correspondant au nom de balise donné en argument.
const li = document.getElementsByTagName("li");
console.log(li);
// Etant une collection, si je souhaite modifier un élément, il faut que j'y accède directement, impossible de modifier directement la collection en entier
li[0].textContent = "Marbre";

// récupère les éléments selon le nom de leur classe.
const p = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(p, p1);

// récupère directement l'élement qui correspond à l'ID donné.
const h1 = document.getElementById("mainTitle");
console.log(h1);

/*
    querySelector va prendre en argument n'importe quel sélecteur css.
    Il va sélectionner le 1er élément qui correspond au selecteur css.
*/
const p2 = document.querySelector(".marche2");
console.log(p2);

// Si on souhaite sélectionner plusieurs éléments à la fois, on utilisera querySelectorAll qui nous rendera une nodeList
const li2 = document.querySelectorAll("footer li");
console.log(li2);
//  ! Attention, HTMLcollection est un objet, nodelist un tableau.

// Plutôt que chercher dans le document entier, on peut chercher qu'à l'intérieur d'un document précis.
const header = document.querySelector('header');
const h = header.querySelector('h1');

// nextElementSibling permet de récupérer l'élément frère suivant.
console.log(header.nextElementSibling);
// Attention nextSibling récupère le prochain frère peu importe si c'est un élément html ou du text.
console.log(header.nextSibling);
// Pareil mais pour le précédent
console.log(li2[2].previousElementSibling);
console.log(li2[2].previousSibling);
// On récupére l'élément parent
console.log(header.parentElement);
// closest permet de sélectionner le parent le plus proche correspondant au selecteur css donné.
console.log(li2[0].closest("footer"));
// retourne une HTMLcollection contenant les enfant de l'élément.
console.log(header.children);
// remove permet de retirer un élément du HTML tout en le gardant existant en JS
h.remove();
console.log(h);
// preprend permet d'ajouter au début d'un de mes éléments plutôt qu'à la fin (comme append)
document.querySelector("main").prepend(h);
// retire l'enfant donné en argument qui se trouve dans le parent.
// header.removeChild(h);