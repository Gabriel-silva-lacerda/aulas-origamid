// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const gabriel = new Pessoa('Gabriel', 'Silva', 22)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


// Liste os construtores dos dados abaixo
 const li = document.querySelector('li');

 //'HTMLLIElement'
 li;
 // Function
 li.click;
 // String
 li.innerText;
 // Number
 li.value;
 // Boolean
 li.hidden;
 // Number
 li.offsetLeft;
 // undefined
 li.click('ativar');

 // Qual o construtor do dado abaixo:
 li.hidden.constructor.name;
 //String - retorna um valor boolean, porém "boolean" é uma String.



