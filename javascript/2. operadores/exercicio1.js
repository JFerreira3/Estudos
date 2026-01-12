const nome = 'Julia';
console.log('Olá, ', nome, '! Seja bem-vinda ao curso de JavaScript!');

console.log('---------------------------------------------------------');

const anoAtual = 2025;
const anoNascimento = 1999;
console.log(`Você tem ${anoAtual - anoNascimento} anos.`);

console.log('---------------------------------------------------------');

const cidade = 'Indaiatuba';
const estado = 'SP';
const pais = 'Brasil';
console.log(`Você está em ${cidade} - ${estado}, ${pais}.`);

console.log('---------------------------------------------------------');

const temCarteira = true;
console.log(typeof temCarteira);

console.log('---------------------------------------------------------');

let saldo = 0.00;
console.log('Saldo inicial: R$ ', saldo);
const deposito = 200.00;
console.log('Acrescentando depósito de: R$ ', deposito);
saldo += deposito;
console.log('Saldo atual: R$ ', saldo);

console.log('---------------------------------------------------------');

let salario = 3000;
const aumento = 10;
console.log('Salário inicial: R$', salario);
console.log(`Aumento de ${aumento}%`);
console.log(`Salário atual: R$ ${salario + (salario * (aumento/100))}`);

console.log('---------------------------------------------------------');

let contadorCliques = 0;
console.log('Click!');
contadorCliques ++;
console.log('Click!');
contadorCliques ++;
console.log('Click!');
contadorCliques ++;
console.log('Total de cliques: ', contadorCliques);

console.log('---------------------------------------------------------');

const pi = 3.14;
// pi = 3;
// vai dar erro pois, pi é uma "const", ou seja, uma constante e por isso, seu valor não pode ser alterado
console.log("PI é uma constante e não pode ser alterada: " + pi); 

console.log('---------------------------------------------------------');

const texto = 'Um texto';
const numero = 1;
const textoMaisNumero = texto + numero;
console.log(typeof textoMaisNumero);