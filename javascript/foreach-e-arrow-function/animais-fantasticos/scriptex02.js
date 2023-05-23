// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);

paragrafo.forEach((item) => {
    console.log(item)
});

// Mostre o texto dos parágrafos no console
paragrafo.forEach((item) => {
    console.log(item.innerText)
});

// Como corrigir os erros abaixo:
const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item, index) => {
   console.log(item, index);
});

// let i = 0;
imgs1.forEach(() => {
    console.log(i++);
});

imgs1.forEach(() => i++);

console.log(i++)

