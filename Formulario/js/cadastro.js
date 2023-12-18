
function validateEmail(email) {

  const erro = document.querySelector('.erro');
  erro.classList.add('erro');

  const regexEmail = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]+/
  );


  if(email.value === ''){
    erro.innerText = 'Preencha o email'
  }
  else if(!regexEmail.test(email.value)){
    erro.innerText = 'Preencha o email corretamente';
  }else{
    erro.innerText = ''
    return true;
  };
}

function validateNome(nome){
  const erro = document.getElementById('erroNome');
  if(nome.value === ''){
    erro.innerText = 'Por favor, qual seu nome?'
  }else{
    erro.innerText = ''
    return true;
  }
}

function validateSobrenome(sobrenome){
  const erro = document.getElementById('erroSobrenome');
  if(sobrenome.value === ''){
    erro.innerText = 'Por favor, qual seu sobrenome?'
  }else{
    erro.innerText = ''
    return true;
  }
}

function validateSenha(senha){
  const erro = document.getElementById('erroSenha');
  if(senha.value === ''){
    erro.innerText = 'Por favor, preencha sua senha?'
  }else{
    erro.innerText = ''
    return true;
  }
}

function validateConfSenha(senhaConf){
  const erro = document.getElementById('erroConfSenha');
  if(senhaConf.value === ''){
    erro.innerText = 'Por favor, confirme sua senha?'
  }else if(senhaConf.value !== senha.value){
    erro.innerText = 'Senhas nao conferem';
  }
  else{
    erro.innerText = ''
    return true;
  }
}

const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const senha = document.getElementById('senha');
const senhaConf = document.getElementById('senha-conf');
const botaoCadastrar = document.querySelector('.cadastrar');
const email = document.querySelector('.email');


email.addEventListener('focusout', ()=>{validateEmail(email)});
nome.addEventListener('focusout', ()=>{validateNome(nome)});
sobrenome.addEventListener('focusout', ()=>{validateSobrenome(sobrenome)});
senha.addEventListener('focusout', ()=>{validateSenha(senha)});
senhaConf.addEventListener('focusout', ()=>{validateConfSenha(senhaConf)});


function cadastrar(){
  //Se todos os inputs estiverem validados 
  //o botao envia o submit 
  //abre um modal e encaminha para a tela de login
  if(
    validateConfSenha(senhaConf) &&
    validateEmail(email) &&
    validateNome(nome) &&
    validateSenha(senha) &&
    validateSobrenome(sobrenome) 
  ){
    function handleClick(){

      const usuario = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        senha: senha.value,
      }


      localStorage.setItem('usuario', JSON.stringify(usuario));

      modal.classList.remove('modal');
      main.classList.remove('back');
      location.href = '/login.html';
    }
    
    const modal = document.getElementById('modal');
    const main = document.querySelector('.formulario');
    const botaoFecharModal = document.querySelector('.botaoFecharModal')
  
    modal.classList.add('active');
    main.classList.add('back');
    
    botaoFecharModal.addEventListener('click', handleClick)
  }
}

function hrefLogin(){
  const cadastroForm = document.querySelector('.cadastro')
  cadastroForm.classList.toggle('virar');
  setInterval(()=>{
    window.location.href = 'login.html';
  }, 300);
}

