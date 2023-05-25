fetch("./dados.json")
  .then((r) => r.text())
  .then((json) => {
    const jsonFinal = JSON.parse(json);

  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavqaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
