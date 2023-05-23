// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let idade1 = 23;
let parente = 50;

if (idade1 > parente) {
    console.log('Maior que parente');
} else if (idade1 === parente){
    console.log('É igual');
} else {
    console.log('Não é maior que parente');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
// Verdadeiro
var idade = 28;
// Verdadeiro
var possuiDoutorado = false;
// False
var empregoFuturo;
// undefined
var dinheiroNaConta = 0;
// False

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e10;
var china = 1340e10;

if (brasil > china) {
    console.log ('Brasil tem mais habitantes');
} else {
    console.log ('Brasil tem menos habitantes');
}

// // O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// // O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}