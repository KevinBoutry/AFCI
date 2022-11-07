"use strict";

let h = prompt(`heure : `)
let m = prompt(`minute : `)
let s = prompt(`seconde : `)

if(s<=58 && m<=58)
{
    ++s;
    alert(`Il sera ${h}h ${m}m ${s}s dans une seconde`);
}
else if (s==59 && m<=58 && h<=23)
{
    ++m;
    s = 0;
    alert(`Il sera ${h}h ${m}m ${s}s dans une seconde`);
}
else if (s==59 && m==59 && h<=22)
{
    ++h;
    m = 0;
    s = 0;
    alert(`Il sera ${h}h ${m}m ${s}s dans une seconde`);
}
else if (h==23 && m==59 && s==59)
{
   h = 0;
   m = 0;
   s = 0;
   alert(`Il sera ${h}h ${m}m ${s}s dans une seconde`);
}
else
{
    alert('ERREUR')
}
