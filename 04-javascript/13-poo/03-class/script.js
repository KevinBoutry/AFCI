import Human from "./Human.js";
import Dev from "./Dev.js";

const h1 = new Human("mauricE", "dupont", 54);
console.log(h1);
console.log(h1.age, Human.categorie);
let datetime = new Date();
// console.log(Date.now(),datetime.now());

Human.description();
h1.salutation();

const h2 = new Human("paul", "fontaine", 76);
console.log(h1, h2);

const d = new Dev("Jean", "charle", 34, "javascript");
console.log(d);
d.salutation();
d.anniversaire();