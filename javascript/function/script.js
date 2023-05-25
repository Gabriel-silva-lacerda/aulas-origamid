// const perimetro = new Function('lado', 'return lado * 4');

// console.log(somar.name);

// function darOi() {
//   console.log('Oi para você');
// }

// darOi.call();

// // const carro = {
// //   marca: 'Ford',
// //   ano: 2018
// // }

// // function descricaoCarro() {
// //   console.log(this.marca + ' ' + this.ano);
// // }

// // descricaoCarro.call(carro);

// const carros1 = ['Ford', 'Fiat', 'VW'];

// carros1.forEach((item) => {
//   console.log(item);
// }); // Log de cada Carro

// carros1.forEach.call(carros1, (item) => {
//   console.log(item);
// }); // Log de cada Carro

// const frutas1 = ['Banana', 'Pêra', 'Uva'];

// carros1.forEach.call(frutas1, (item) => {
//   console.log(item);
// }); // Log de cada Fruta


// // const carros = ['Ford', 'Fiat', 'VW'];
// // const frutas = ['Banana', 'Uva', 'Pêra'];

// // carros.forEach.call(carros, (item) => {
// //   console.log(item)
// // });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }
// const li = {
//   element: document.querySelector('li'),
// }

// Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul');


// ul.ativo.call(li, 'ativo');
// ul.ativo('ativar');

Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas1 = ['Uva', 'Maçã', 'Banana'];
frutas1.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas1); // Remove Banana
frutas1.pop(); // Mesma coisa que a função acima


const frutas = ['Uva', 'Maçã', 'Banana'];

Array.prototype.pop.call(frutas);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = arrayLi.filter((item) => {
  return item.classList.contains('ativo');
});
console.log(filtro);

const $ = document.querySelectorAll.bind(document, li);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda, 400);
console.log(acelerarHonda(30));
console.log(carro);