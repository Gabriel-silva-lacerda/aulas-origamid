// const comida = 'Pizza';
// const agua = new String('Agua');

// console.log(comida.length);

// const frase1 = 'A melhor comida';

// console.log(frase1[frase1.length -1]);
// console.log(frase1.charAt(frase1.length -1));


// const frase2 = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';

// const fraseFinal = frase2.concat(linguagem, '!!', ' Oi');

 const fruta = 'Banana';
 const listaFrutas = 'Melancia, Banana, Laranja';

// console.log(listaFrutas.includes(fruta)); // true


console.log(fruta.startsWith('B'));
console.log(fruta.endsWith('B'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao3.slice(0, -2); // camis

console.log(fruta.lastIndexOf('n'));

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'));
});

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section') 

console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

