"use strict";
class Truc {
    prenom = "Maurice";
    nom = "Dupont";
    age = 54;
}
const t = new Truc();
t.prenom;
/*
    Les mots clefs public, protected et private ne sont pas visible dans la version compilée, ils correspondent à:
        - une propriété ou méthode classique ou public
        - une propriété ou méthode précédée de "#" pour private.
        - et protected est le vrai nouveau ici, à mi chemin entre public et private, il n'est pas accessible hors de la classe comme private, mais peut être hérité comme public.
*/
class Machin extends Truc {
    constructor() {
        super();
        this.prenom;
        this.nom;
        // age étant privé, c'est le seul non accessible.
        // this.age;
    }
    faireUnTruc() {
        /*
            Si lors de l'utilisation d'une méthode, this doit valoir autre chose que la classe elle même.
            Par exemple dans le cas d'un "AddEventListener"

            On peut préciser dans les parenthèses de la méthode, le type de "this".
            Cela ne sera évidemment pas traduit dans la compilation.
        */
        this;
    }
}
class Collection {
    items;
    /*
        En indiquant à notre constructor que son argument est "public", "private" ou "protected" sans rien ajouter d'autre à notre constructor.
        TS va automatiquement sauvegarder l'argument comme une propriété de la class lors de la compilation.
    */
    constructor(items) {
        this.items = items;
    }
    addOne(arg) {
        this.items.push(arg);
        return this;
    }
    addMore(arg) {
        this.items.push(...arg);
        return this;
    }
}
const c = new Collection([54, 42, 13]);
/*
    En ayant indiquer un type generic lors de la déclaration de ma classe, et en précisant que mes méthodes attendent ce même type.
    UNe fois ma classe instanciée avec un tableau d'un type précis mes méthodes attendront ce même type
*/
c.addOne(7).addMore([23, 84]);
/*
    Petite astuce de POO utilisable même hors TS:
    Si une méthode ne retourne aucune valeur.
    Voius pouvez lui faire retourner "this" afin de pouvoir chaîner les méthodes au dessus.

    La méthode retournant l'objet lui même, on peut faire appel à une nouvelle méthode tout de suite après.
*/
class Triangle {
    c1 = 54;
    c2 = 32;
    c3 = 11;
}
class Rectangle {
    c1 = 15;
    c2 = 28;
}
function getC1(arg) {
    return arg.c1;
}
getC1(new Rectangle());
getC1(new Triangle());
// getC1(new Date());
/*
    La comparaison des objets par TS se fait selon leurs propriétés, getC1 attend un "Rectangle", donc un objet contenant les propriétés "c1" et "c2".
    Lui donner un "Triangle" qui contient ces mêmes propriétés est donc valide.
*/
class Polygone {
    sides = {};
    countSide() {
        return this.sides.length;
    }
}
// new Polygone();
/*
    Une class abstraite , est une classe qui ne peut pas être instanciée.
    Elle n'a pour but, que le fait d'être hérité.
    Elle sert de modèle à ses enfant.

    Ma classe abstraite possède aussi une méthode abstraite dont tout ce qu'on connait c'est son nom et sa valeur de retour.

    Cela signifie que lorsque je vais faire hériter ma classe, la calsse enfant va devoir contenir une méthode de même nom retournant le type indiqué.
    Son contenu par contre peut changer d'une enfant à l'autre.
*/
class Carre extends Polygone {
    constructor(c) {
        super();
        this.sides.c = c;
    }
    surface() {
        return this.sides.c * this.sides.c;
    }
}
const square = new Carre(5);
console.log(square.surface());
console.log(square.countSide());
