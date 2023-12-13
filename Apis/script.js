
function initBuscaEndereco(){
  const botao = document.querySelector('.endereco');
  botao.addEventListener('click', buscaCep);
  const div = document.createElement('p');
  const span = document.querySelector('form');
  div.classList.add('resultado');


  async function buscaCep(){
    const cep = document.getElementById('cep');
    cepValue = cep.value;
    const busca = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
    const response = await busca.json();
    
    if(response.localidade !== undefined){
      div.innerText = `${response.logradouro}, ${response.bairro} - ${response.localidade}, ${response.uf}`;
      span.appendChild(div);
    }else{
      div.innerText = 'Cep não encontrado.';
      span.appendChild(div);
    }

    ;
  }
}


/* --------------- BUSCA O PRECO DO BITCOIN ------------- */
function initBitcoin(){
const api = 'https://blockchain.info/ticker';
const preco = document.querySelector('.container-preco');
const p = document.createElement('p');
const span = document.createElement('span');
span.classList.add('espaco');
p.classList.add('espaco');
preco.appendChild(span);
preco.appendChild(p);

function pegaPreco(){
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(body => {
      span.innerText = 'R$ ' + body.BRL.last.toLocaleString('pt-br');
      p.innerText = 'R$ ' + body.BRL.buy.toLocaleString('pt-br');

    });
  }
  pegaPreco();

  setInterval(pegaPreco, 30000);

}


/* ------------------ PIADAS CHUCK NORRIS ------------- */
function initPiadas(){

  const url = 'https://api.chucknorris.io/jokes/random';
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(body=>{
    span.innerText = body.value;
  });

  
  const span = document.createElement('span');
  const botao = document.querySelector('[data-botao]');
  const pai = document.querySelector('.chuck')
  .insertBefore(span, botao);

  span.className.add = 'piadaChuck';

  botao.addEventListener('click', showJoke);

function showJoke(){
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(body=>{
      span.innerText = body.value;
    });
}

}

initBuscaEndereco();
initBitcoin();
initPiadas();
  