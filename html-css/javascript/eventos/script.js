const curso = {
    name: 'JavaScript',
    completar() {
        console.log("Curso Completo")
    },
};

console.log(curso.name)
curso.completar()

// -- //

const ativar = document.querySelector(".ativar");

function ativarAoClick(event) {
    console.log(event.currentTarget);
}

ativar.addEventListener('click' , ativarAoClick)

console.log(ativar);