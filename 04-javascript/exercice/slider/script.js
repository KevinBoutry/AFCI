const images = ["./image/image1.webp", "./image/image2.webp", "./image/image3.webp",]

window.addEventListener("keyup",slide);

async function slide(e)
{
    if(e.key!="Enter") return;
    const s = await import("./slider.js");
    s.default(images);
    window.removeEventListener("keyup",slide);
}

