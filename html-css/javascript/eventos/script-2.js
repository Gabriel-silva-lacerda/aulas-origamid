const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativo')
}

botao.addEventListener('click', mostrar)