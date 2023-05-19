
const cep = document.getElementById('cep');
const botao = document.querySelector('#botao');
botao.addEventListener('click', buscaCep);

const div = document.createElement('p');
const span = document.querySelector('form');
div.classList.add('resultado');

function buscaCep(cep){
  const url = fetch(`https://viacep.com.br/ws/${cep}/json/`)

  .then(response => {
    return response.json();
  }).then(response => {
    div.innerText = `${response.logradouro}, ${response.bairro} - ${response.localidade}, ${response.uf}`;
    span.appendChild(div);
  });
}
  