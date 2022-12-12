"use strict";

import H from "./Human.js";

/*
    Avec le mot clef "extends" suivi du niom d'une autre classe.
    On donne à notre nouvelle classe toutes les propriétés et méthode de la classe parente.
    On dit que notre classe "hérite" de son parent.

    Toute, en vérité, non, les propriétés et méthodes privées ne sont pas héritées

*/
export default class Dev extends H
{
    /**
     * 
     * @param {string} prenom prenom du développeur
     * @param {string} nom nom du développeur
     * @param {string|number} age âge du développeur
     * @param {string|Array<string>} techniques langages du développeur
     */
    constructor(prenom, nom, age, techniques)
    {
        /*
            L'héritage JS entraine un problème, si la classe qui a hérité possède un "contructor", cela va entrainer une erreur.

            Pour corriger cette erreur, il faut appeler dans le constructor de la nouvelle classe, la fonction "super()".

            Cette fonction cva permettre d'appeler le constructor parent.

            On va donc par la même occasion en profiter pour fournir à "super()" les arguments qui sont attendus par le "constructor" du parent.
        */
        super(prenom, nom , age)
        this.setTechnique = techniques;
    }
    set setTechnique(t)
    {
        if(Array.isArray(t)) this.tech = t;
        else this.tech = [t];    
    }
    get getTechnique()
    {
        return this.tech.join(", ");
    }
    /*
        Il est possible de réécrire une méthode héritée du parent.
        Pour cela il suffit de la redéclarer.

        Dans ce cas la méthode originelle disparaît et toute les méthodes qui en faisaient usage feront maintenant usage de la nouvelle méthode.
    */
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullname}, j'ai ${this.age} ans et je maîtrise ${this.getTechnique}`);
    }
}