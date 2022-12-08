"use strict";

/*
    Par défaut, this représente l'objet dans lequel il se trouve.
    Au plus haut niveau de notre script, il est donc égal à l'objet window.
*/

console.log(this);
console.log(this === window);

function test()
{
    /*
        Selon si on utilise "use strict" ou non, this dans une fonction retournera soit "undefined" soit l'objet parent, ici "window"
    */
    console.log(this);
}
test();

/*
    Lors d'un appel de la fonction par un écouteru d'événement, this représente l'élément sur lequel a été attaché l'écouteur.
*/
document.addEventListener("click", test);
/*
    A la différence de la propriété tarfetr de l'événement.
    this retourne toujours l'élément attaché.
    (ici target peut retourner body ou span ou que this retourne toujours body)
*/

document.body.addEventListener("click", function(event)
{
   console.log(this);
   console.log(event.target); 
})

// Dans un fonction fléché, this retourne l'objet parent (window)

document.body.addEventListener("click", (event)=>
{
   console.log(this);
   console.log(event.target); 
})

document.body.click();

/*
    .bind() utilisé sur une fonction retourne un clone de la fonction à la différence que dans celle ci "this" vaudra ce qui a été donné en argument à bind.
*/

let test2 = test.bind("coucou");
test();
test2();

let article = document.createElement("article");
document.body.addEventListener("click", test.bind(article));
document.body.click();