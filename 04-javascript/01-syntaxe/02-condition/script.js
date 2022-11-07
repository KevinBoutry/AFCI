"user strict";

/*
    On va chercher la méthode "floor" de l"objet "Math" qui nous permet d'arrondir à l'inférieur.
    Math.random() nous permet d'obtenir un chiffre entre 0 et 1.
    x contiendra donc un chiffre entre 0 et 20.
*/
let x = Math.floor(Math.random()*20)

// If permet de vérifier une condition, il attend un boolean pour savoir si il peut faire l'action entre accolade.
if(x<10)
{
    console.log(x + " est plus petit que 10");
}

// A la suite d'un if, on peut optionellement ajouter un else if pour vérfier une autre condition.
else if(x>10)
{
    console.log(x + " est plus grand que 10");
}

// A la suite du'un if ou d'un else if on peut ajouter qui s'enclenchera si toutes les autres conditions sont fausses.

else
{
    console.log("x vaut 10");
}

// On peut mettre autant de else if que l'on veut


/*
    D'autres syntaxe sont possible comme en ne mettant pas d'accolade ci dessous mais dans ce cas on ne peut entre qu'une instruction.
*/
if(x<10)
    console.log(x + " est plus petit que 10");
else if(x>10)
    console.log(x + " est plus grand que 10");
else
    console.log("x vaut 10");

let message = x<10?x + " est plus petit que 10":x + " est plus grand ou égale à 10";
console.log(message);
message = x<10?x + " est plus petit que 10" :x>10?x + " est plus grand que 10":"x vaut 10";
console.log(message);

// ---------------------------------------------------- Switch ----------------------------------------------------

let ville = prompt("De quelle ville venez-vous?")
console.log(ville);
switch(ville.toLowerCase())
{
    case "londres":
    case "tokyo":
    case "paris":
        alert("Oh le bouffon !");
        break;
    case "lille":
        alert("sacré bg !");
        break;
    default:
        alert("OK RANDOM")
}

// ---------------------------------------------------- ?? --------------------------------------------------------

let a, b = undefined, c = null, d = "chaussette", e ={nom:"Bruno"}, f= ["test"];
// Le ?? permet de vérifier si la variable précédente est définie et dans le cas contraire utilise ce qui est donné après les "??"
console.log(a??"Coucou");
console.log(b??"Coucou");
console.log(c??"Coucou");
console.log(d??"Coucou");
console.log(e.nom??"Coucou");
console.log(e.prenom??"Coucou");
console.log(f[0]??"Coucou");
console.log(f[1]??"Coucou");

