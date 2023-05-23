// Crie uma função para verificar se um valor é Truthy

function valor(numero) {
    return !!numero;
}
console.log(valor('ola'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function dados() {
    let nome = 'Gabriel';
    let sobrenome = 'Silva';
    return `Meu nome é ${nome} e meu sobrenome é ${sobrenome}`;
}

console.log(dados())

// Crie uma função que verifica se um número é par
function verificar(numero) {
    let modulo = numero % 2;
    if (modulo === 0) {
        return 'É par';
    } else {
        return 'É impar';
    }
}

console.log(verificar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(frase) {
    return typeof frase;
}

console.log(tipo(2))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// addEventListener('scroll', function() {
//     console.log('Gabril Silva Lacerda');
// });

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

  console.log(precisoVisitar(2));
  console.log(jaVisitei(20));
  
