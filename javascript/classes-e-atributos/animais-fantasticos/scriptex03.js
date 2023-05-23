// Adicione a classe ativo a todos os itens do menu
const ativo = document.querySelectorAll('.menu a');

ativo.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ativo.forEach((item) => {
    item.classList.remove('ativo');
});

ativo[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');

img.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt');
    console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu


ativo.forEach((link) => {
    link.setAttribute('href', 'https://www.origamid.com/slide/javascript-completo-es6/#/0305-classes-e-atributos/2');
})


