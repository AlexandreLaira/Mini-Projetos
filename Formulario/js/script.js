
const user = JSON.parse(localStorage.getItem('usuario'));
if(!user){
  alert('Você precisa estar logado para acessar essa página!')
  location.href = 'login.html'
}else{
  const h1 = document.querySelector('h1');
  h1.innerText = `Bem vindo, ${user.nome}`
}