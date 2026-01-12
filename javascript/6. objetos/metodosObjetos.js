const pessoa = {
    nome: 'Vinicius',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
};


for (const chave in pessoa) {
    console.log('Chave', chave);
    console.log('Valor: ', pessoa[chave]);
};

const chaves = Object.keys(pessoa);
const valores = Object.valores(pessoa);

// array com chaves e valores
const entradas = Object.entries(pessoa);

console.log('Chaves', chaves);
console.log('Valores', valores);
console.log('Entradas', entradas);