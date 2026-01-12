// SET
// Um Set é uma estrutura de dados que guarda valores únicos. Pense nele como uma coleção onde nenhum valor pode se repetir, diferente dos arrays onde você pode ter elementos iguais.
let numeros = new Set();  

numeros.add(1); 

numeros.add(2); 

numeros.add(2); // Não será adicionado novamente  

console.log(numeros); // Resultado: Set { 1, 2 } 


/*
QUANDO USAR UM SET?
  - Para remover duplicatas de um array.
  - Para verificar rapidamente se um valor já existe no conjunto.

Exemplo removendo duplicatas:
 */


let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5]; 
let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]; 
console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4, 5] 


/*
MAP
Um Map é uma estrutura que permite armazenar pares de chave e valor, semelhante a um objeto, mas com algumas vantagens importantes:
   - Pode usar qualquer tipo de dado como chave (inclusive objetos).
   - Mantém a ordem em que os itens foram inseridos.

Veja como criar e usar um Map:
*/


let mapa = new Map();  

mapa.set('nome', 'João'); 
mapa.set('idade', 25);  

console.log('MAP', mapa);
console.log(mapa.get('nome')); // Resultado: João 
console.log(mapa.get('idade')); // Resultado: 25 

/*
Quando usar um Map?
   - Para armazenar informações associadas a uma chave específica.
   - Quando precisar manter a ordem de inserção.
   - Para usar chaves que não sejam strings. 
*/