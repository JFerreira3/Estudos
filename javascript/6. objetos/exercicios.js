// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.
const eu = {
    nome: 'Julia',
    idade: 26,
    profissao: 'Desenvolvedora FullStack'
}

//  2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
console.log('Nome: ', eu.nome);

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.
eu.idade = 27;

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".
eu['cidade'] = 'Indaiatuba';

// 5. Função com objeto
// Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.
function apresentarPessoa(p) {

    return `Olá! Meu nome é ${p.nome}, tenho ${p.idade} anos e sou ${p.profissao}.`;

}

console.log(apresentarPessoa(pessoa));

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoas = [{ nome: 'Julia', idade: 26 }, { nome: 'Gabriel', idade: 27 }, { nome: 'Junior', idade: 28 }];

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

for (pessoa of pessoas) {
    if (pessoa.idade >= 18) {
        console.log(pessoa.nome, 'é maior de idade');
    }
}

// 8. Objeto com método
// Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".
const usuario = {

    nome: "Beatriz",

    saudacao: function () {

        console.log(`Olá, eu sou ${this.nome}`);

    }

};
usuario.saudacao(); 

// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
for (let chave in pessoa) { 

console.log(`${chave}: ${pessoa[chave]}`); 

};

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
const produto = { 

preco: 25, 

quantidade: 4 

}; 

const valorTotal = produto.preco * produto.quantidade; 

console.log(`Valor total da compra: R$${valorTotal}`); 