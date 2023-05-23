const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const removerPrimeiro = comidas.shift();
console.log(removerPrimeiro);
// Remova o último valor de comidas e coloque em uma variável
const removerUltimo = comidas.pop();
console.log(removerUltimo);
// Adicione 'Arroz' ao final da array
const adicionarFinal = comidas.splice(2, 0, 'Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
const adicionarInicio = comidas.splice(0, 0, 'Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); // true
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')); // false

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarro = carros.slice();
carros.pop();
console.log(carros);
console.log(cloneCarro);

