"use strict";

const todo = document.querySelector("#todo");

todo.addEventListener("change", todoadd);

function todoadd(e)
{
    const newdiv = document.createElement("div");
    newdiv.innerHTML = e.target.value
    document.body.append(newdiv);
    e.target.value='';
    const div = document.querySelectorAll("div");
    for (let i = 0 ; i < div.length ; i++)
    {
        div[i].addEventListener("click", ()=>div[i].classList.add("fait"))
    }
}

todo.addEventListener("change",saveData)

function saveData()
{
    const data = new FormData(todo)
    console.log(data);
}