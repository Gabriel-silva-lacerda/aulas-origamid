// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
const carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
carro.preco = 3000;

console.log(carro.preco);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
    raca: 'Labrador',
    cor: 'black',
    idade: 10 + ' anos',
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'cachorro lati'
        } else {
            return 'não lati'
        }
    }
}

console.log(cachorro.latir('mulher'))