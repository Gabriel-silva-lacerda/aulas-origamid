console.log(Number.isNaN(NaN));

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.4)); // false

console.log(parseFloat('100.27 reais'));
console.log(parseInt('100.27 reais'));

const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

const preco3 = 59.49;
preco3.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

console.log(Math.PI);

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4
Math.max(5,3,10,42,2); // 42 retorna o número maior
Math.min(5,3,10,42,2); // 2 retorna o número menor
Math.random(); // 0.XXX retorna um número aleatório de 0 a 1 '0.08069066145682724'

const aleatório = Math.floor(Math.random() * 10);

const aleatório2 = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

console.log(aleatório2);