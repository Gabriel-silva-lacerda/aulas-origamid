let possuiGraduacao = true;
let possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
    let x = 10;
} else if (possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possuí nada');
}

let nome = '';

if (nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

if (!possuiGraduacao) {
    console.log(possuiGraduacao);
    console.log('Não possui graduação');
}