"use strict";

// ---------------------------------- 1 -----------------------------------------
const username = document.querySelector("#user");
const usercheck = /^[a-zA-Z_-]{3,16}$/

username.addEventListener("input",testuser)

function testuser(){
    if (usercheck.test(username.value))
    {
        username.style.backgroundColor =("")
    }
    else    
    {
        username.style.backgroundColor =("red")
    }
}

// ------------------------------- 2 ----------------------------------------------

const phone = document.querySelector("#telephone");
const phonecheck = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/

phone.addEventListener("input", testphone)

function testphone(){
    if (phonecheck.test(phone.value))
    {
        phone.style.backgroundColor =("")
    }
    else    
    {
        phone.style.backgroundColor =("red")
    }
}

// -------------------------------- 3 --------------------------------------------------

const mail = document.querySelector("#email");
const mailcheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

mail.addEventListener("input",testmail)

function testmail(){
    if (mailcheck.test(mail.value))
    {
        mail.style.backgroundColor =("")
    }
    else    
    {
        mail.style.backgroundColor =("red")
    }
}

// ------------------------------------ 4 --------------------------------------------------

const pass = document.querySelector("#pass")
const progress = document.querySelector(".progress")
const checkmin = /[a-z]/
const checkmaj = /[A-Z]/
const checknum = /[0-9]/
const checkspec = /[!@#\$%\^\&*\)\(+=._-]/
const checklong = /.{8,}$/
var barwidth = 0

pass.addEventListener("input",progressbar)

function progressbar()
{
    barwidth = 0

    if(checkmin.test(pass.value))
    {
        barwidth = barwidth + 20;
        progress.style.width = `${barwidth}%`;        
    }

    if(checkmaj.test(pass.value))
    {
        barwidth = barwidth + 20;
        progress.style.width = `${barwidth}%`;    
    }

    if(checknum.test(pass.value))
    {
        barwidth = barwidth + 20;
        progress.style.width = `${barwidth}%`;     
    }
    
    if(checkspec.test(pass.value))
    {
        barwidth = barwidth + 20;
        progress.style.width = `${barwidth}%`;     
    }

    if(checklong.test(pass.value))
    {
        barwidth = barwidth + 20;
        progress.style.width = `${barwidth}%`;     
    }

    if(barwidth == 20)
    {
        progress.style.backgroundColor = "" 
    }
    else if(barwidth == 40)
    {
        progress.style.backgroundColor = "red" 
    }
    else if(barwidth == 60)
    {
        progress.style.backgroundColor = "orange" 
    }
    else if(barwidth == 80)
    {
        progress.style.backgroundColor = "yellow" 
    }
    else if(barwidth == 100)
    {
        progress.style.backgroundColor = "green" 
    }   

    console.log(barwidth);
    console.log(progress.style.width);
}

// -------------------------------------------------------- 5 ------------------------------------------------------------

const passbis = document.querySelector("#passBis")

passbis.addEventListener("input", checkpwd)

function checkpwd()
{
    if (passbis.value != pass.value)
    {
        passbis.style.border = "2px solid red"
    }
    else
    {
        passbis.style.border = ""
    }
}


