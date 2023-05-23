// let ultimoItem = videogame.pop();

// Retorna de 0 a 10 no console
for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

// Retorna de 0 a 10 no console
// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let videogame = ['Switch', 'PS5', 'XBOX', '3DS'];

for (let item = 0; item < videogame.length; item++) {
    console.log(videogame[item]);
    if (videogame[item] === 'PS5') {
        break;
    }
}

// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
let frutas = ['Maça', 'Banana', 'Pera', 'Uva'];

frutas.forEach(function(fruta, index, array){
    frutas.pop();
    console.log(fruta, index, array);
});