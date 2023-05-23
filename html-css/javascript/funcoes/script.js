function logCurso(nome, horas) {
    console.log(nome, horas, 'horas');
    return nome;
}

logCurso("JavaScript", "40");
const retorno = logCurso("HTML", "40");

console.log(retorno)

// função que retorna objeto
function logCurso(nome, horas) {
    console.log(nome, horas, 'horas');
    return {
        nome,
        horas,
    }
}

logCurso("JavaScript", "40");
const retorn = logCurso("HTML", "40");

console.log(retorn.nome)


