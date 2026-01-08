// HOF -> Higher-Order Function - Função que recebe outra função como parâmetro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}


const resultadoSoma = calcular(1, 2, soma); // soma é um callback
console.log('Resultado Soma: ', resultadoSoma);

const resultadoSubtracao = calcular(1, 2, subtracao); // subtracao é um callback
console.log('Resultado Subtração: ', resultadoSubtracao);