// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function adicionarClasse(event){
    event.preventDefault();
    linkInterno.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}

linkInterno.forEach((link) => {
    link.addEventListener('click', adicionarClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

// function mostrarElementos(event) {
//     console.log(event.currentTarget);
// }

// function mostrarElementos(event) {
//     event.currentTarget.remove();
// }

// todosElementos.forEach((todos) => {
//     todos.addEventListener('click', mostrarElementos);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentarTexto(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', aumentarTexto);

