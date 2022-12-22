"use strict";
/*
    Pour VSCode, docuement contient bien une propriété "chaussette" bien qu'en vrai, elle sera "undefined"
*/
document.chaussette;
class Point3D {
    x = 0;
    y = 0;
    z = 0;
    get() {
        return this.x;
    }
}
