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

var str : number = parseInt(strinp.value)
var dex : number = parseInt(dexinp.value)
var con : number = parseInt(coninp.value)
var int : number = parseInt(intinp.value)
var sag : number = parseInt(saginp.value)
var chr : number = parseInt(chrinp.value)

calcstats();

function calcstats()
{
    console.log(str, dex, con, int , sag, chr);    
    maxpts = 60 - (str + dex + con + int + sag + chr);
    ptsrestant.textContent = maxpts.toString();
}


