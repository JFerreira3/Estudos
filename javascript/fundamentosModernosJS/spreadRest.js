const camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = camila1;

camila2.idade = 30;

console.log(camila1);
console.log(camila2);
// clonar não funcionou fazendo desse jeito


// usando spread operator:

const joao1 = {
    nome: 'João',
    idade: 29,
    profissao: 'Desenvolvedor'
}

let joao2 = { ...joao1 }; // spread

joao2.idade = 30;

console.log(joao1);
console.log(joao2);

//sobrescrever joao e alterar apenas umas propriedade e adicionar uma propriedade:

joao2 = {
    ...joao1,
    profissao: 'Desenvolvedor Senior', // altera profissao
    possuiCNH: true // nova propriedade
}

console.log(joao2);



// rest operator (restante do objeto)

const { nome, ...restante } = camila1;
console.log(nome);
console.log(restante);

