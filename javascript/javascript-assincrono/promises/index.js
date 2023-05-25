const promessa = new Promise((resolve, reject) => {
    let condicao = true
    if(condicao) {
        setTimeout(() => {
            resolve({nome: 'Andre', idade:28});
        }, 1000)
        
    } else
        reject(Error('Um erro ocorreu'))
});

const retorno = promessa
.then(resolucao => {
    resolucao.profissao = 'Designer'
    return resolucao.profissao
})
.then(resolucao => {
    console.log(resolucao)
}).catch(rejeitada => {
    console.log(rejeitada);
}).finally(() => {
    console.log('acabou');
});

console.log(retorno);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado');
    }, 1000);
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados');
    }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})
