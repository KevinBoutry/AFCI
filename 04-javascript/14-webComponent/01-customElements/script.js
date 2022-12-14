import SuperBalise from "./SuperBalise.js";
import SuperDiv from "./superDiv.js";
/*
    Les customs elements (éléments personnalisés) permettent de créer nso propres éléments HTML.
    On va pouvoir créer de nouvelles balises ayant leurs propres capacités et règles.
    Pour cela on a besoin de créer une nouvelle classe.

    Il existe 2 types de customs elements :
        - les éléments personnalisés autonomes qui héritent de "HTMLElement";
        - les élémentrs personnalisés Intégrés qui hértnent d"un élément HTML particulier (p,div,span..)
    Puis on appelle(hors de la classe) la méthode suivante :

        customElements.define()

    Elle prendra en 1er argument, un string qui sera le nom de votre balise.
        !Important les nom des balises personnnalisés doivent contenir un "-".
    En 2nd argument, la classe de notre élément personnalisé.
        *voir SuperBalise.js
    En 3eme optionnellement, si l'élément n'est pas autnome, on précisera de quel élément il hérite.
        cela avec un objet "{extends:'nomDuParent'}"
        *voir SuperDiv.js
        
    Une fois cela fait, notre élément est fonctionnel, on peut l'appeler dans le HTML avec l'une des syntaxes suivante :
        - autonome :"<nom-balise></nom-balise>"
        - intégré : "<baliseParent is ='nom-balise'></baliseParent>"

    Il est aussi possible d'ajouter des cycles de vie à nos éléments personnalisés.
    Ces cycles de vies sont des méthodes qui se déclenchent automatiquement à des moments précis :

        - "connectedCallback" se déclenche quand l'élémént est ajouté à la page.
        - "disconnectedCallback" se déclenche quand l'élément est retiré de la page.
        - "adoptedCallback" se déclenche quand l'élément est déplacé d'un document à un autre.
            (principalement utile avec des iframes)
        - "attributeChangedCallback" se déclenche quand les attributs ciblés sont modifiés.
            On pourra donner à ce dernier 3 arguments :
            - le 1er recevra le nom de l'attribut modifié
            - le 2nd l'attribut avant modification
            - le 3eme l'attribut après modification
            Pour que cela fonctionne, on devra accompagner cette méthode, d'un getter static appelé "observedAttributes" qui retournera un tableau contenant les attributes à observer.
            *voir superDiv.js
*/