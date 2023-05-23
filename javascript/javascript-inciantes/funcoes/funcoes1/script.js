function areadQuadrado(lado) {
    return lado * lado;
}

console.log(areadQuadrado(2));

function pi() {
    return 3.14;
}
 
let total = 5 * pi();
console.log(pi());
console.log(total);

function imc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita('azul')); 

addEventListener('click', function() {
    console.log('oi');
});

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc2(20, 1.6); // retorna o imc
  console.log(imc2(800, 1.80)); // retorna o imc e undefined
  

  function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor, preencha um número';
    }
    else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
  }

  console.log(terceiraIdade('oi'));

  let totalPaises = 193;
  function faltaVisitar(paisesVisitados) {
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;
  }

  console.log(totalPaises);

  var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

