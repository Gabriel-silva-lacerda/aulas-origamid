// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector('#cep');
const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado')

btn.addEventListener('click', handleClick);

function handleClick(event) {
   event.preventDefault();
   const cep = inputCep.value;
   buscaCep(cep)
}

function buscaCep(cep) {
   fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(response => response.text())
   .then(body => {
      resultado.innerText = body;
   });
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc')
function fetchBtc() {
   fetch('https://blockchain.info/ticker')
   .then(response => response.json())
   .then(btcJson => {
      btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
   })
}

// setInterval(fetchBtc, 1000 * 30);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const proxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada')
function puxarPiada() {
   fetch('https://api.chucknorris.io/jokes/random')
   .then(response => response.json())
   .then(piada => {
      paragrafoPiada.innerText = piada.value;
   });
}

proxima.addEventListener('click', puxarPiada)