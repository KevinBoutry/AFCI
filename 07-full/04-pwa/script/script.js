if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("./sw.js");
}

if(!Math.trunc)
{
    Math.trunc = function(number)
    {
        return number<0?Math.ceil(number): Math.floor(number);
    };
}

// const h = element.height??100;

const element = document.querySelector('body');

var h = (element.heighyt !== undefined && element.height !== null)?element.height : 100;