// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const pessoa = {
    nome: 'Julia',
    idade: 26,
    email: 'julia@email.com'
}

const { nome, idade, email } = pessoa;


// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
const linguagensProgramacao = ['c', 'java', 'javascript'];
const [ling1, ling2, ling3] = linguagensProgramacao;


// 3. Rest operator em função
// Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).
function somarTudo(...numeros) {
    // (acumulado, numero atua)l
    return numeros.reduce((total, num) => total + num, 0);

}

console.log(somarTudo(1, 2, 3, 4)); // 10 

// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.
const frutas1 = ['manga', 'pera', 'uva'];
const frutas2 = ['maçã', 'morango', 'banana'];

const todasFrutas = [...frutas1, ...frutas2];

// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const obj1 = {
    nome: 'Julia'
}
const obj2 = {
    idade: 26
}

const pessoa2 = { ...obj1, ...obj2 };
console.log(pessoa2);

// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
function saudacao(nome = "visitante") {

    console.log(`Olá, ${nome}!`);


}

saudacao(); // Olá, visitante! 
saudacao("Marcos"); // Olá, Marcos! 

// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1; // mês começa em 0 
const ano = hoje.getFullYear();

console.log(`Hoje é ${dia}/${mes}/${ano}`);

// 8. Modularização com export/import
// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).
// ---------------- CommonJS -------------------------

// Arquivo: somar.js 

    // module.exports = function somar(a, b) { 

        // return a + b; 

    // } 

 

// Arquivo: app.js 

    // const somar = require('./somar'); 
    // console.log(somar(5, 3)); 

 
// ---------------- ES Modules -------------------------
// (Node com "type": "module") 

// Arquivo: somar.js 

    // export function somar(a, b) { 

        // return a + b; 

    // } 

 
// Arquivo: app.js 
    
    // import { somar } from './somar.js'; 
    // console.log(somar(5, 3)); 


    
// 9. Classe com construtor
// Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.
class Livro {

    constructor(titulo, autor) {

        this.titulo = titulo;

        this.autor = autor;

    }


    descrever() {

        return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;

    }

}


// 10. Método dentro da classe
// Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.
const livro1 = new Livro("Dom Casmurro", "Machado de Assis"); 
const livro2 = new Livro("1984", "George Orwell"); 

console.log(livro1.descrever()); 
console.log(livro2.descrever()); 