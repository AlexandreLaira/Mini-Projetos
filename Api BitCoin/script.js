

/* --------------- BUSCA O PRECO DO BITCOIN ------------- */
function initBitcoin(){
const api = 'https://blockchain.info/ticker';
const preco = document.querySelector('.container-preco');
const p = document.createElement('p');
preco.appendChild(p);

function pegaPreco(){
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(body => {
      console.log(body.BRL.buy);
      p.innerText = body.BRL.buy + ' BRL';

    });
  }
  pegaPreco();

  setInterval(pegaPreco, 30000);

}
initBitcoin();


/* ------------------ PIADAS CHUCK NORRIS ------------- */
function initPiadas(){
  const url = 'https://api.chucknorris.io/jokes/random';
  const p = document.createElement('p');
  const pai = document.querySelector('.container-chuck');
  pai.appendChild(p);
  
  const botao = document.querySelector('input');

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