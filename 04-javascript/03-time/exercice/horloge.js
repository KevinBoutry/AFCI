// clock();

// function clock() {
//   const date = new Date();
//   const hours = ((date.getHours() + 11) % 12 + 1);
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   const hour = hours * 30;
//   const minute = minutes * 6;
//   const second = seconds * 6;
  
//   document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;

//   document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

//   document.querySelector('.second').style.transform = `rotate(${second}deg)`;
// }

// setInterval(clock, 1000);

const tH = document.querySelector('.hour');
const tM = document.querySelector('.minute');
const tS = document.querySelector('.second');
let time, h, m, s;

function start()
{
  time = new Date()
  h = time.getHours()*30-90;
  m = time.getMinutes()*6-90;
  s = time.getSeconds()*6-90;
  tS.style.transform = `rotate(${s}deg)`;
  tM.style.transform = `rotate(${m}deg)`;
  tH.style.transform = `rotate(${h}deg)`;
}

setInterval(start, 1000);