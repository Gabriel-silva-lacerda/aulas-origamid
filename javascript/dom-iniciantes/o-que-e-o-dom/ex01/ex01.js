// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href); // http://127.0.0.1:5500/o-que-e-o-dom/ex01/index.html

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const h1 = document.querySelector('h1');
const recebe = h1.classList[0];

console.log(recebe);

// Retorne a linguagem do navegador

const userLocale = navigator.languages[0];

console.log(userLocale); 

// Retorne a largura da janela 

const largura = innerWidth;
const altura = innerHeight

console.log(largura);
console.log(altura);
