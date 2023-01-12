"use strict";

var maxpts : number = 60;

const ptsrestant = <HTMLElement> document.querySelector("#pts");
ptsrestant.textContent = maxpts.toString();

const strinp = <HTMLInputElement> document.querySelector("#STR");
const dexinp = <HTMLInputElement> document.querySelector("#DEX");
const coninp = <HTMLInputElement> document.querySelector("#CON");
const intinp = <HTMLInputElement> document.querySelector("#INT");
const saginp = <HTMLInputElement> document.querySelector("#SAG");
const chrinp = <HTMLInputElement> document.querySelector("#CHR");

strinp.addEventListener ("change", calcstats);
dexinp.addEventListener ("change", calcstats);
coninp.addEventListener ("change", calcstats);
intinp.addEventListener ("change", calcstats);
saginp.addEventListener ("change", calcstats);
chrinp.addEventListener ("change", calcstats);

calcstats();

function calcstats()
{    
    var str : number = parseInt(strinp.value);
    var dex : number = parseInt(dexinp.value);
    var con : number = parseInt(coninp.value);
    var int : number = parseInt(intinp.value);
    var sag : number = parseInt(saginp.value);
    var chr : number = parseInt(chrinp.value);    
    maxpts = 60 - (str + dex + con + int + sag + chr);
    ptsrestant.textContent = maxpts.toString();
    if(maxpts <= 0)
    {
        strinp.max = str.toString();
        dexinp.max = dex.toString();
        coninp.max = con.toString();
        intinp.max = int.toString();
        saginp.max = sag.toString();
        chrinp.max = chr.toString();
    }
    else
    {
        strinp.max = "20";
        dexinp.max = "20";
        coninp.max = "20";
        intinp.max = "20";
        saginp.max = "20";
        chrinp.max = "20";
    }
}