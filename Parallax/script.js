 

let text = document.getElementById('text');
let dragon = document.querySelector('#dragon');
let folhas = document.getElementById('folhas');
let folhas2 = document.getElementById('folhas2');
let smoke = document.getElementById('smoke');


function scroll(){
  let valor = window.scrollY;
  dragon.style.left = valor * -1.23 + 'px';
  text.style.marginTop = valor * 2.33 + 'px';
  text.style.color = `rgba(${valor}, ${valor * 2.5}, ${valor * 4}, 1)`;
  smoke.style.opacity = 1 - (valor / 500);
}

function mouse(e, elemento){
  let mouseX = e.pageX * 4.3;
  let mouseY = e.pageY * 4.3;

  elemento.style.transform = `translate(${mouseX/100}px , ${mouseY/100}px)`;
}


window.addEventListener('scroll', scroll);

window.addEventListener('mousemove', (event)=>{
  mouse(event, folhas);
});

