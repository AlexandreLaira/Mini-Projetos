 

let text = document.getElementById('text');
let dragon = document.getElementById('dragon');
let folhas = document.getElementById('folhas');
let folhas2 = document.getElementById('folhas2');
let smoke = document.getElementById('smoke');


window.addEventListener('mousemove', ()=>{
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + 'px';
  text.style.color = `rgba(${value}, ${value * 2.5}, ${value * 4}, 1)`;
  dragon.style.left = value * -1.5 + 'px';
  folhas2.style.left = value * -1.2 + 'px';
  folhas.style.left = value * 1.2 + 'px';
  smoke.style.opacity = 1 - (value / 500);

});

