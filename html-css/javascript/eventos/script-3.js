const alturaTela = window.innerHeight;
const larguraTela = window.innerWidth;

console.log(alturaTela);
console.log(larguraTela);

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener('mousemove', coordenadaMouse);

function scroll() {
  console.log(window.pageYOffset);
}

window.addEventListener('scroll', scroll);
