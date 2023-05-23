let pessoa = {
    nome: 'Gabriel',
    idade: 22,
}

console.log(pessoa);

let quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        console.log(this.lados)
        return this.lados * 3;
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(2));
console.log(quadrado.perimetro());
console.log(quadrado.cinco());

console.log(Math.PI);

let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function () {
    console.log('Escondi')
}
let bg = menu.backgroundColor;
