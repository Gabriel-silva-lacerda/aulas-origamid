export default function initiAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0
        const timer = setInterval(() => {
            numero.innerText = start
            start += incremento;
            if(start > total) {
                numero.innerText = total
                clearInterval(timer)
            }
        }, 25 * Math.random());
    });
} 
