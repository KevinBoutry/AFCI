"use strict";
import p1, {Person2 as p2} from "./Person.js"
console.log(p1, p2);
p1.setAge = "35ans";
console.log(p1.age);
console.log(p1.getFullName);
p1.setNom = "dubois";
p1.setPrenom = "JEAN";
console.log(p1.getFullName);
p1.salutation();