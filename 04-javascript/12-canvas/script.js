"use strict";

/*
    La balise canvas ne sert à rien sans JS.
    Mais avec JS on peut l'utiliser pour faire des animations, des jeux, des outils interactif ou autre.
*/

const canvas = document.querySelector("canvas");

/*
    Pour intéragir avec le canvas, on a besoin d'un contexte.
    Pour cela on va utiliser la méthode "getContext()" en lui donnant en argument le context voulu.
    Le plus classique est celui qu'on va voir ici, le context "2d"

    Mais il est possible de faire de la 3d avec "webgl" par exemple.
*/
const ctx = canvas.getContext("2d");

// ---------------------------------- Optionnel ------------------------------------
// Redimension du canvas :
function resize()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// --------------------------------------- CANVAS ---------------------------------------------

// La plupart des méthodes du canvas, se lance sur le contexte.


/*
    fillRect et strokeRect permettent de dessiner u nrectangle avec les paramètres suivants:
    positionx, positiony, largeur, hauteur.
*/
ctx.fillRect(50, 50, 150, 25);
ctx.strokeRect(100, 150, 25, 150);

/*
    fillStyle et strokeStyle sont des propriétés qui permettent de changer les couleurs
*/
ctx.fillStyle = "rgb(156, 78, 94";
ctx.strokeStyle = "red";
ctx.fillRect(25, 59, 78, 95);
ctx.strokeRect(150, 150, 54, 245);


// Pour faire des formes plus complexes, on va devoir faire appel à :
// On commence un chemin avec beginPath
ctx.beginPath()
// On déplace notre curseur à une position de départ
ctx.moveTo(345, 70);
// Je trace un chemin vers une nouvelle position
ctx.lineTo(450,200);
// Je dessine les traits des chemins tracés précédement
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(500, 40);
ctx.lineTo(160, 543);
// closePatch permet de refermer une forme dessiner par des lignes.
ctx.closePath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
// lineWidth permet de changer la largeur du trait.
ctx.lineWidth = 8;
ctx.stroke();
// fill permet de remplir la forme précédente dessinée
ctx.fill();

// ------------------- Cercle -----------------------

ctx.beginPath();
/*
    arc permet de dessiner des cercles ou arc de cercle, avec les propriétés suivantes :
    position x, position y, taille du rayon,
    position de départ du radiant (0 pour un cercle complet)
    position de fin du radiant (2*Math.PI pour un cercle complet)
*/
ctx.arc(89, 90, 42, 0, 2*Math.PI);
ctx.stroke();
// clearRect permet d'effacer celui qui se dans la zone rectangulaire sélectionnée.
ctx.clearRect(50, 60, 70, 80);

// -------------------- Image -------------------------

// Je crée un nouvel objet image
let img = new Image();
// Je lui donne une source.
img.src = "./SF2logo.png"
// On attend le chargement de l'image avant de le dessiner
img.onload = ()=>ctx.drawImage(img, 250, 250, 150, 100);
// Les paramètres sont l'image, la position X, la position Y, la largeur et la hauteur.

// ------------------- Texte ---------------------------

ctx.lineWidth = 1;
// font permet de changer la taille et la police d'ecriture.
ctx.font = "82px serif";
// strokeText et fillText permettent d'écrire du texte évidé ou rempli.
ctx.strokeText("Coucou", 500, 500);
ctx.fillText("Hello", 700, 700);
// textAlign pour changer l'alignement du texte.
ctx.textAlign = "center";
ctx.fillStyle = "purple";
// On peut ajouter optionnellement un dernier paramètre pour limiter sa largeur.
ctx.fillText("Salut tout le monde !", 500 , 100 , 210)
// avec le texte align center, son x à 500 se retrouve au milieu du texte et non au début.

// ---------------- forme des traits -----------------------

ctx.lineWidth = 16;

ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(700, 40);
ctx.lineTo(700, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(750, 40);
ctx.lineTo(750, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "butt";
ctx.moveTo(800, 40);
ctx.lineTo(800, 400);
ctx.stroke();


