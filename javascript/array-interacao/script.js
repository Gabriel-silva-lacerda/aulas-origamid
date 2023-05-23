// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
// });

const li = document.querySelectorAll('li');

li.forEach((item) => {
  item.classList.add('ativa');
});

li.forEach(function(item) {
  item.classList.add('ativa');
});

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase()
});

const numeros = [2, 4, 5, 6, 78];
const numeroX2 = numeros.map((numero) =>{
  return numero * 2;
});

console.log(novaArray);
console.log(numeroX2);

const carros1 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros1.map((item) => {
  const novoValor = 'Carro ' + item;
  return novoValor
});

console.log(newCarros);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

const nomeAulas = (aula) => aula.nome;
const arrayNomeAulas = aulas.map(nomeAulas); 
console.log(arrayNomeAulas);

const aulas1 = [10, 25, 30];

const reduceAulas = aulas1.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
});

console.log(reduceAulas);

const numero = [10, 25, 30, 3, 54, 33, 22];
const maiorNumero = numero.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
}, 0);

console.log(maiorNumero);

const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas3.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas);

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => {
  return acc + ' ' + fruta;
});
const frutasLeft = frutas.reduce((acc, fruta) => {
 return (acc + ' ' + fruta);
});

console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva


const frutas1 = ['Banana', '', 'Pêra', 'Uva'];

const temUva = frutas1.some((item)=> {
  console.log(item);
  return item === 'Uva' 
});

const every = frutas1.every((fruta)=> {
  console.log(fruta)
  return fruta 
});

const indexUva = frutas1.find(item => {
  return item === 'Uva'
});

console.log(indexUva);

console.log(every);

const numeros2 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros2.every((n) => {
  return n > 3;
});

console.log(maiorQue3);

const frutas4 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas4.filter((item) => {
  return item
});

console.log(arrayFrutas);

const numeros1 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros1.filter(x => x > 45); // [88, 101]

console.log(buscaMaior45);

const aulas2 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas2.filter((aula) => { 
  return aula.min > 15;
});

console.log(aulasMaiores);
