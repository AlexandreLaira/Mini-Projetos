const api = 'https://viacep.com.br/ws/01001000/json/';

fetch(api)
.then(result => {
  console.log(result.json());
});