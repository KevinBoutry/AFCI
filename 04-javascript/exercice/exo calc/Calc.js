"use strict";

export default class Calc
{
    nombre1;
    nombre2;

    create()
    {
        const ah = document.querySelector("#affichagehaut");
        const ab = document.querySelector("#affichagebas");
        const un = document.querySelector("#un");
        const verifsign = /^[^\+\-\*\/]+$/
        un.addEventListener("click", ()=> {         
            if(verifsign.test(ah.innerHTML) || ah.innerHTML == "")
            {
                ah.innerHTML += 1;
            }
            else
            {
                ab.innerHTML += 1;
            }
        })
        const deux = document.querySelector("#deux");
        deux.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 2;
            }
            else
            {
                ab.innerHTML += 2;
            }
        })
        const trois = document.querySelector("#trois");
        trois.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 3;
            }
            else
            {
                ab.innerHTML += 3;
            }
        })
        const quatre = document.querySelector("#quatre");
        quatre.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 4;
            }
            else
            {
                ab.innerHTML += 4;
            }
        });
        const cinq = document.querySelector("#cinq");
        cinq.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 5;
            }
            else
            {
                ab.innerHTML += 5;
            }
        })
        const six = document.querySelector("#six");
        six.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 6;
            }
            else
            {
                ab.innerHTML += 6;
            }
        })
        const sept = document.querySelector("#sept");
        sept.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 7;
            }
            else
            {
                ab.innerHTML += 7;
            }
        })
        const huit = document.querySelector("#huit");
        huit.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 8;
            }
            else
            {
                ab.innerHTML += 8;
            }
        })
        const neuf = document.querySelector("#neuf");
        neuf.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 9;
            }
            else
            {
                ab.innerHTML += 9;
            }
        })
        const zero = document.querySelector("#zero");
        zero.addEventListener("click", ()=> {            
            if(verifsign.test(ah.innerHTML))
            {
                ah.innerHTML += 0;
            }
            else
            {
                ab.innerHTML += 0;
            }
        })
        const virg = document.querySelector("#virgule");
        virg.addEventListener("click", ()=>{
            const verifvirg = /^[^\.]+$/
            if (verifvirg.test(ah.innerHTML))
            {
                ah.innerHTML += ".";
            }
        })
        const AC = document.querySelector("#AC");
        AC.addEventListener("click",()=>{
            ah.innerHTML = ""
            ab.innerHTML = ""
        });
        const plus = document.querySelector("#additioner");
        plus.addEventListener("click", ()=> ah.innerHTML += " +");
    }
}