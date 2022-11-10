"use strict";

// ------------------------------------------ DOM ------------------------------------------------------------
// Document Object Model
const h = document.createElement("header");
/*
    Je fais appel à la méthode du dom createElement qui me permettra de créer un élément HTML.
    Celle ci prendre en paramètre, le nom de la blaise que je souhaite créer.
*/
console.log(h);
const m = document.createElement("main");
const f = document.createElement("footer");
/*
    append est une méthode qui peut être utilisée sur tout élément html qui peut contenir d'autres éléments.
    Il insère à la fin de cet élément ce qui lui a été donné en paramètre.

    Il existe aussi la méthode "appendChild" qui est moins permissive.
    append peut recevoir autant de paramètre que l'on souhaite, appendChild qu'un seul.
    append peut recevoir des string, pas appendChild.
*/
document.body.append(h , m, f);

h.innerHTML = "<h1>Super site en JS</h1>";
f.innerHTML = "<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>";

for(let i = 0; i<5; i++)
{
    const p = document.createElement("p");
    p.textContent = "Cette balise <br> ne sera pas interprêté dans un textContent, alors qu'elle l'aurait été dans un innerHTML.";
    m.appendChild(p);
}

const div = document.createElement("div");
div.innerHTML = "<h2>Santé !</h2><p>Manger 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne manger ni trop gras, ni trop sucré, ni trop salé, l'abus d'alcool est dangeureux pour la santé</p><button>tchin tchin</button><button>Le gras c'est la vie</button>"; 
document.body.append(div);