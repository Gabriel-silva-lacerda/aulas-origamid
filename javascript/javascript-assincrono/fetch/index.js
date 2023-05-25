const imagem = fetch('https://viacep.com.br/ws/04939070/json/');


imagem.then(response => {
   console.log(response.status);
})