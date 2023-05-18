
const card = document.querySelectorAll('section');
const botao = document.querySelectorAll('span');

botao.forEach((item)=>{
  item.addEventListener('click', ()=>{
    card.forEach((cartao)=>{
      cartao.classList.toggle('virar');
    });
  })
})