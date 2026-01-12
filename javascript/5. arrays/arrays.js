const frutas = ['uva', 'banana', 'kiwi', 'maçã', 'morango'];

console.log(frutas);
console.log('Total de frutas', fruta.length)
console.log('Primeira fruta', fruta[0]);
console.log('Última fruta', fruta[fruta.length - 1]);


frutas.push('melancia'); // adicionar item

frutas.splice(2, 1); // remove 1 item a partir do índice 2

// percorrer arrays

for (let i = 0; i < frutas.length; i++) {
    console.log('Índice: ', i);
    console.log((frutas[i]));
};

frutas.forEach((valor, indice) => {
    console.log('Índice: ', indice, valor);
});

for (const fruta of frutas) {
    console.log('Fruta: ', fruta);
}