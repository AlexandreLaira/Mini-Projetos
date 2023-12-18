
  const email = document.getElementById('emailLogin');
  const senha = document.querySelector('.senhaLogin');
  // const submitLogin = document.getElementById('submitLogin');
  
  function validateEmailLogin(email) {
    const erro = document.querySelector('.erro');
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
    
    function validateSenhaLogin(senha){
      const erro = document.getElementById('erroSenha');
      if(senha.value === ''){
        erro.innerText = 'Por favor, preencha sua senha?'
      }else{
        erro.innerText = ''
        return true;
      }
    }
    
    email.addEventListener('focusout', ()=>{validateEmailLogin(email)});
    senha.addEventListener('focusout', ()=>{validateSenhaLogin(senha)});

    
  function login(){
    const user = JSON.parse(localStorage.getItem('usuario'));
    const email = document.getElementById('emailLogin');
    const senha = document.querySelector('.senhaLogin');
    const modal = document.getElementById('modal');
    const main = document.querySelector('[data-formulario]');
    const botaoFecharModal = document.querySelector('.botaoFecharModal');
    const modalh4 = document.querySelector('.modal h4');

    function handleClick(){
      modal.classList.remove('active');
      main.classList.remove('back');
    }
    
      if(
        user &&
        user.email === email.value &&
        user.senha === senha.value
        ){
          location.href = '/index.html'; 
        }
        else{
          modalh4.innerText = 'Usuario ou senha incorreto.'
          modal.classList.add('active');
          main.classList.add('back');
          botaoFecharModal.addEventListener('click', handleClick);
      }
    }

function hrefCadastro(){
  const loginForm = document.querySelector('.login')
  loginForm.classList.toggle('virar')
  setInterval(()=>{
    window.location.href = '/cadastro.html'
  }, 300)
}


  