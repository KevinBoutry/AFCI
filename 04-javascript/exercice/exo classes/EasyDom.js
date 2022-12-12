"use strict";

export default class EasyDom
{
    /**
     * 
     * @param {string} e nom de la balise à créer
     * @param {string} c contenu HTML de la balise
     */
    tag(e, c)
    {
        const tag = document.createElement(e);
        document.body.append(tag);
        tag.innerHTML = c;      
    }

    /**
     * 
     * @param {string} s élément HTML que l'on veut séléctionner
     * @param {boolean} all si true sélectionne tous les éléments portant ce type
     * @returns 
     */
    select(s, all)
    {
        if(all == true)
        {
            var sel = document.querySelectorAll(s);
        }
        else
        {
            var sel = document.querySelector(s);
        }
        return sel;
    }

    /**
     * 
     * @param {string} a élément cible de l'événement
     * @param {string} b type d'événement
     * @param {string} c fonction à déclencher
     */
    event(a, b ,c)
    {
        if(a instanceof NodeList)
        {
            a.forEach(element => {element.addEventListener(b , c)});
        }
        else
        { 
            a.addEventListener(b , c);            
        }
    }
}