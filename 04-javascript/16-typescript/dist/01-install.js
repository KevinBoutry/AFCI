"use strict";
/*
    Typescript est une surcouche à Javascript, c'est à dire que tout ce qui est faisable en HS, est faisable en typescript.

    Au contraire d'une bibliothèque classique, ici on se retrouve avec des fichiers ".ts"
    Par ce fait ils sont illisbles par le navigateur, il faudra compiler notre code avant de le donner à lire à celui ci.

    --------------- Avantage --------------
    TS apporte le typage, cela nous force à coder avec rigueur en indiquant le tpe de chaque varaible, argument...
    Une fois maîtrisé, cela nous permet d'éviter certaines erreurs et de gagner du temps.
    Il peut nous permettre d'adapter un code moderne à de vieux navigateurs.
    Typescript n'a pas besoin d'être chargé par le site, donc notre projet n'est pas allourdi.

    -------------- Désavantage -------------
    On est forcé de compiler notre code.
    Cela rajoute un outil supplémentaire à notre projet.

    ------------- Installation -------------
    L'installation se fait via npm avec la commande suivante:
    * npm install typescript --save-dev

    Une fois installé vous pouvez lancer la compilation d'un fichier avec :
    * npx tsc pathToFile.ts

    Il est de bon ton de séparer les fichiers TS et JS:
    * npx tsc pathToFile.ts --outDir folderName

    Pour éviter de retaper tout cela, on peut créer la racine de notre projet, un fichier nommé :
    * tsconfig.json
    qui contiendra un objet avec les propriété suivantes :
    {
        "compilerOptions": {
            "outDir": "folderName"
        },
        "files": [
            "pathToFile.ts"
        ]
    }
    Une fois cela fait, je n'aurai qu'à taper :
    * npx tsc
    Et comme avec scss, il est possible de demander à typescript de surveiller nos fichiers pour les compiler à chaque sauvegardes avec:
    * npx tsc --watch
*/
const btn = document.querySelector("#compte");
let i = 0;
btn.addEventListener("pointerdown", () => {
    i++;
    // Ici typescript provoque une erreur car Textcontent attend un string et on lui donne un nombre.
    // btn.textContent = i;
    // On devra alors transformer notre nombre en string.
    btn.textContent = i.toString();
});

