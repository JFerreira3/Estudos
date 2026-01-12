// estruturas de decisão com if, else if, else

// 1. Verificação de idade para compra de bebida
const idade = 18;
if (idade >= 18) {
    console.log('Pode comprar bebiba alcoólica');
} else {
    console.log("Venda proibida para menores de 18");
}

// 2. Saudação de acordo com a hora
const horaAtual = 14;
if (horaAtual >= 6 && horaAtual <= 12) {
    console.log('Bom dia');
} else if (horaAtual >= 12 && horaAtual <= 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

// 3. Verificação de número positivo ou negativo
const numero = -23;
if (numero == 0) {
    console.log('Numero = 0');
} else if (numero > 0) {
    console.log('Numero positivo');
} else if (numero < 0) {
    console.log('Numero negativo');
}

let nota = 8.5; 

if (nota >= 9) { 

console.log("Conceito A"); 

} else if (nota >= 8) { 

console.log("Conceito B"); 

} else if (nota >= 6) { 

console.log("Conceito C"); 

} else if (nota >= 4) { 

console.log("Conceito D"); 

} else { 

console.log("Conceito E"); 

} 


// 5. Número par ou ímpar com ternário
const numeroDois = 5;
numeroDois % 2 == 0 ? console.log('Número par') : console.log('Número ímpar');

// 6. Menu com switch-case
const opcao = 3;
switch (opcao) {
    case 1:
        console.log('Cadastrar'); break;
    case 2:
        console.log('Listar'); break;
    case 3:
        console.log('Sair'); break;
}

// 7. Validação de campo obrigatório
const email = '';
if (email) {
    console.log('Email válido');
} else {
    console.log("Preencha o campo de email");
}

// 8. Validação de senha segura
const senha = 'senha123';
if (senha.length >= 6) {
    console.log('Senha muito curta');
} else {
    console.log('Senha válida');
}

// 9. Compra com saldo
const saldoDisponivel = 200;
const valorCompra = 50;
if (saldoDisponivel >= valorCompra) {
    console.log('Compra aprovada');
} else {
    console.log('Saldo insuficiente');
}

// 10. Validação de formulário completo
const nome = 'julia';
const idade2 = 26;
const email2 = '';

if (nome && idade2 > 0 && email2) {
    console.log("Formulário enviado com sucesso!");
}