"use strict";

// -------------------------------------- EXO 1 --------------------------------------------
const aside = document.querySelector("aside div");
document.body.append(aside)

// -------------------------------------- EXO 2 --------------------------------------

const li = document.querySelectorAll("li");
for (let i=0 ; i<3 ; i++)
{
    li[i].textContent = `Test${i+1}`;
}
//  --------------------------------------- EXO 3 -------------------------
