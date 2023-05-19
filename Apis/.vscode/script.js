
function initBuscaEndereco(){
  const botao = document.querySelector('.endereco');
  botao.addEventListener('click', buscaCep);
  const div = document.createElement('p');
  const span = document.querySelector('form');
  div.classList.add('resultado');


  function buscaCep(){
    const cep = document.getElementById('cep');
    cepValue = cep.value;
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)

    .then(response => {
      return response.json();
    }).then(response => {
      div.innerText = `${response.logradouro}, ${response.bairro} - ${response.localidade}, ${response.uf}`;
      span.appendChild(div);
    });
  }
}
initBuscaEndereco();


/* --------------- BUSCA O PRECO DO BITCOIN ------------- */
function initBitcoin(){
const api = 'https://blockchain.info/ticker';
const preco = document.querySelector('.container-preco');
const p = document.createElement('p');
p.classList.add('espaco');
preco.appendChild(p);

function pegaPreco(){
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(body => {
      p.innerText = 'R$ ' + body.BRL.buy.toLocaleString('pt-br');
    });
  }
  pegaPreco();

  setInterval(pegaPreco, 30000);

}
initBitcoin();


/* ------------------ PIADAS CHUCK NORRIS ------------- */
function initPiadas(){

  const url = 'https://api.chucknorris.io/jokes/random';
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(body=>{
    p.innerText = body.value;
  });

  
  const p = document.createElement('span');
  const pai = document.querySelector('.container-chuck');
  pai.appendChild(p);
  
  const botao = document.querySelector('.chuck');

  botao.addEventListener('click', showJoke);

function showJoke(){
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(body=>{
      p.innerText = body.value;
    });
}

}
initPiadas();
  