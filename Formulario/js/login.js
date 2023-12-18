


  const email = document.getElementById('emailLogin');
  const senha = document.querySelector('.senhaLogin');
  const submitLogin = document.getElementById('submitLogin');
  
  function validateEmailLogin(email) {
    const erro = document.querySelector('.erro');
    const regexEmail = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
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

      if(
        validateEmailLogin(email) &&
        validateSenhaLogin(senha) 
      ){

        function handleClick(){
          modal.classList.remove('modal');
          main.classList.remove('back');
          location.href = '/index.html'; 
        }

        const modal = document.getElementById('modal');
        const main = document.querySelector('[data-formulario]');
        const botaoFecharModal = document.querySelector('.botaoFecharModal')
        
        modal.classList.add('active');
        main.classList.add('back');
        
        botaoFecharModal.addEventListener('click', handleClick)
      }
        
    }

  