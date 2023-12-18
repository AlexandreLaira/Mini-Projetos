
const card = document.querySelector('.cadastro');
const loginForm = document.querySelector('.login')
const botao = document.querySelector('.alterar');
const url = window.location.href;

botao.addEventListener('click', (event)=>{
  event.preventDefault();
  const cadastroURL = 'http://127.0.0.1:5500/cadastro.html';
  const loginURL = 'http://127.0.0.1:5500/login.html';

  if(url === cadastroURL){
    card.classList.toggle('virar');
    setInterval(()=>{
      window.location.href = '/login.html';
    }, 300);
  }
  else if(url === loginURL){
    loginForm.classList.toggle('virar')
    setInterval(()=>{
      window.location.href = '/cadastro.html'
    }, 300)
  }
});

