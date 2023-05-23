var carro = 'Fusca';
function mostrarCarro() {
    console.log(carro);
  }
  
  mostrarCarro(); // Fusca no console
  console.log(carro); // Erro, carro is not defined
  
if (true) {
    let mes = 'dezembro';
    console.log(mes);
}

// for (let i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

const semana = 'Sexta';

const data = {
    ano: 2018,
    mes: 'Dezembro',
}

data.ano = 2019;

