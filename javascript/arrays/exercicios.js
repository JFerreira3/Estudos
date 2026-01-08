// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
const nomes = ['Ana', 'Pedro', 'João', 'Maria', 'Letícia'];

for (nome of nomes) {
    console.log('Nome: ', nome);
}


// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.
const frutas = ['uva', 'banana', 'kiwi', 'maçã', 'morango'];
console.log('Frutas iniciais: ', frutas);
frutas.push('melancia');
console.log('Fruta adicionada: ', frutas);
frutas.shift();
console.log('Fruta removida: ', frutas);


// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.
const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba'];
console.log('Qtde. Ccidades: ', cidades.length);

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
const numeros = [10, 20, 30];
let soma = 0;
for (numero of numeros) {
    soma += numero;
};
console.log('Soma: ', soma);

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
const notas = [7.0, 7.5, 8.0, 10.0];
let somaNotas = 0;
for (nota of notas) {
    somaNotas += nota;
};
const media = somaNotas / notas.length;
console.log('Média: ', media);


// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

nomes.forEach(nome => {
    console.log('Olá ', nome);
});

// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
const precos = [35.00, 8.99, 20.00];

const precosDescontos = precos.map((preco) => {
    return preco - (preco * 0.10);
});
console.log('Preços com desconto', precosDescontos);

// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
const idades = [12, 18, 22, 37];
const maioresIdade = idades.filter((idade) => {
    return idade >= 18;
});

console.log('Maiores de idade: ', maioresIdade);

// 9. Simulando carrinho de compras
// Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.
let precoTotal = 0;
for (preco of precos) {
    precoTotal += preco;
};

const valorFinal = precoTotal - (precoTotal*0.20);
console.log('Valor final: ', valorFinal);

// 10. Lista de tarefas
// Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).
let tarefas = ["[ ] Estudar", "[x] Lavar a louça", "[ ] Ir ao mercado", "[x] Caminhar", "[ ] Dormir"]; 

let pendentes = tarefas.filter(function(tarefa) { 

return tarefa.startsWith("[ ]"); 

}); 

console.log("Tarefas pendentes:", pendentes); 