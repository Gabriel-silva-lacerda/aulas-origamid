// const pessoas = new Object({
//   nome: 'André'
// });

// console.log(pessoas);

// const carros = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carros).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carros).init('Ferrari');
// console.log(ferrari.buzinar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// // const moto = {
// //   rodas: 2,
// //   capacete: true,
// // }

// // const carro = {
// //   rodas: 4,
// //   mala: true,
// // }

// // Object.assign(moto, funcaoAutomovel);
// // Object.assign(carro, funcaoAutomovel);



// const moto = {
//   capacete: true,
// }

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4
//     }
//   }
// });


// console.log(moto);

// const frutas = ['Banana'];

// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// const novaFruta = frutas1;

// Object.is(frutas1, novaFruta);

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.seal(carro);
// carro.portas = 4;

// carro.marca = 'Honda';
// console.log(carro)

const frutas = ['Banana', 'Uva'];
const frase = 'Oi Frase';
const somar = function(a, b) {
  return a + b
}

const carro = {
  marca: 'Ford'
} 

console.log(carro.toString());

Object.prototype.toString.call(frutas);


