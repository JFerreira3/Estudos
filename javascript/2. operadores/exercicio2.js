// operadores aritiméticos

// 1. Verificação de maioridade
const idade = 16;
console.log('É maior de idade? ', idade >= 18);

// 2.Situação do Aluno
const nota1 = 7.5;
const nota2 = 9.0;
const media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!')
}

// 3. Simulação de troco 
const valorCompra = 35.90;
const valorPago = 50;
const troco = valorPago - valorCompra;
console.log('Troco: R$ ', troco);

// 4. Validação de senha
const senhaRegistrada = 'senha123';
const senhaDigitada = 'senh123';
const senhasIguais = senhaRegistrada === senhaDigitada;
console.log('Digitou senha corretamente? ', senhasIguais);

// 5. Controle de faltas
const totalAulas = 80;
const faltas = 25;
const faltasPermitidas = 80 * (25 / 100); // 25% das aulas
if (faltas > faltasPermitidas) {
    console.log('Passou do limite de faltas!');
} else {
    console.log('Não passou do limite de faltas!');
}

// 6. Verificação de login 
const temLogin = true;
const senha = true;
const podeAcessar = temLogin && senha;
console.log('Pode acessar o sistema? ', podeAcessar);

// 7. Valor negado
const disponivel = true;
console.log('Valor negado: ', !disponivel);

// 8. Condições compostas
const numeroUm = 10;
const numeroDois = 5;
if (numeroUm % 2 === 0 && numeroDois % 2 === 0 && numeroUm === numeroDois) { 

console.log("Os números são pares e iguais."); 

} else { 

console.log("Os números não atendem todas as condições."); 

} 


// 9. Calculadora de porcentagem
const porcentagem = 120 * (15/100);
console.log("15% de 120 é igual a: ", porcentagem);

// 10. Ordem de operações 

let resultado = 2 + 3 * 5; 

console.log("Resultado da expressão 2 + 3 * 5: " + resultado); 

// A multiplicação é feita primeiro por causa da ordem de precedência dos operadores. 

// Ou seja, 3 * 5 = 15, depois 2 + 15 = 17 
