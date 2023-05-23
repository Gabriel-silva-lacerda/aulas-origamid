const nav = document.querySelector('nav');
const produtos = document.querySelector('.produtos a');

nav.style.backgroundColor = 'black';

// TIPO DE DADOS 

let total = 0;

const compras = 30;
const imposto = 10;

total = compras + imposto;
console.log(total);

const dobro = total * 2;
const metade = total / 2;
const desconto = total - 20;

const strings = '20' + '20'; // 2020
const numbers = 20 + 20; // 40


// Obejtos 

const nome = 'O Senhor dos Anéis';
const ano = 1954;
const autor = 'J. R. R. Tolkien';

const nomeFilme = 'O Senhor dos Anéis';
const anoFilme = 2001;
const diretorFilme = 'Peter Jackson';

const livro = {
  nome: 'O Senhor dos Anéis',
  ano: 1954,
  autor: 'J. R. R. Tolkien',
};

const filme = {
    nome: 'O Senhor dos Anéis',
    ano: 2001,
    diretor: 'Peter Jackson',
  };

console.log(livro);
console.log(livro.nome);
console.log(livro.ano);

console.log(filme);
console.log(filme.diretor);