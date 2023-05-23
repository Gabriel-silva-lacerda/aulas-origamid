// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[10] = 'Kia';

// console.log(carros.length);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);
const obj = {
  0: 'Andre',
  1: 'Rafel',
  2: 'Teste',
  length: 3,
}

const arrayObj = Array.from(obj);

console.log(li);
console.log(arrayLi);

// let li1 = document.querySelectorAll('li'); // NodeList
// Array.isArray(li1); // false

// li = Array.from(li); // Array
// Array.isArray(li); // true

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2][0].length);

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
console.log(instrumentos);

const idades = [32,21,33,43,1,12,8];
idades.sort();
console.log(idades);

const carros = ['Ford', 'Fiat', 'VW'];
carros.push('Ferrari');
carros.unshift('Kia');

// console.log(carros);

// console.log(carros.pop())
// console.log(carros.shift())

// console.log(carros.splice(2, 1, 'Fusca'));
// console.log(carros);

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css')); // true 
console.log(linguagens.includes('ruby')); // false
console.log(linguagens.indexOf('python')); // 4
console.log(linguagens.indexOf('js')); // 2
console.log(linguagens.lastIndexOf('js')); // 5

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens2.join()); // 'html,css,js,php,python'
console.log(linguagens2.join(' ')); // 'html css js php python'
console.log(linguagens2.join(', ')); // html, css, js, php, python

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');
console.log(htmlString);

const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
linguagens3.slice(3); // ['php', 'python']
linguagens3.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens3.slice();
