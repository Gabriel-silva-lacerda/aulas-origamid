function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

const ganhadores = ['Pedro', 'Marta', 'Maria'];
anunciarGanhadores('Carro', ...ganhadores);


const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, ...legumes];

console.log(comidas);

const todosOsNumeros = [4,5,20,10,30,2,33,5]
const numeroMaximo = Math.max(...todosOsNumeros); // 33

console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
