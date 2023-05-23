// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoMenu = menu.cloneNode(true);
copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq');
const primeiroDt = faqLista.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faqLista.innerHTML = animais.innerHTML;
