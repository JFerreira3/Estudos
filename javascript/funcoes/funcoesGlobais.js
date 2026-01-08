// setTimeout
function saudacao() {
    console.log('bom dia');
}

setTimeout(saudacao, 2000);


// setInterval
// simular crônometro até 10;
let contador = 0;

const id = setInterval(() => {
    contador++;
    console.log('Tempo decorrido (em segundos): ', contador);
    if (contador == 10) {
        clearInterval(id);
    }

}, 1000);