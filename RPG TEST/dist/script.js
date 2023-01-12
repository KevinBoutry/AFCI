"use strict";
var maxpts = 60;
const ptsrestant = document.querySelector("#pts");
ptsrestant.textContent = maxpts.toString();
const strinp = document.querySelector("#STR");
const dexinp = document.querySelector("#DEX");
const coninp = document.querySelector("#CON");
const intinp = document.querySelector("#INT");
const saginp = document.querySelector("#SAG");
const chrinp = document.querySelector("#CHR");
strinp.addEventListener("change", calcstats);
dexinp.addEventListener("change", calcstats);
coninp.addEventListener("change", calcstats);
intinp.addEventListener("change", calcstats);
saginp.addEventListener("change", calcstats);
chrinp.addEventListener("change", calcstats);
calcstats();
function calcstats() {
    var str = parseInt(strinp.value);
    var dex = parseInt(dexinp.value);
    var con = parseInt(coninp.value);
    var int = parseInt(intinp.value);
    var sag = parseInt(saginp.value);
    var chr = parseInt(chrinp.value);
    maxpts = 60 - (str + dex + con + int + sag + chr);
    ptsrestant.textContent = maxpts.toString();
    if (maxpts <= 0) {
        strinp.max = str.toString();
        dexinp.max = dex.toString();
        coninp.max = con.toString();
        intinp.max = int.toString();
        saginp.max = sag.toString();
        chrinp.max = chr.toString();
    }
    else {
        strinp.max = "20";
        dexinp.max = "20";
        coninp.max = "20";
        intinp.max = "20";
        saginp.max = "20";
        chrinp.max = "20";
    }
}
