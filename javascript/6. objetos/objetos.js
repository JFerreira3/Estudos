const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
};

pessoa.sobrenome = 'Paula';

console.log('Nome: ', pessoa.nome);
console.log('Sobrenome: ', pessoa.sobrenome);

const livro = {
    titulo: 'O Hobit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
};

livro.publicado = true;
livro.idiomas = ['Inglês', 'Português', 'Espanhol'];
livro .idiomas.push('Mandarim');
livro.idiomas.push('Francês');


console.log('Livro antes: ', livro);
delete livro.paginas;
console.log('Livro depois: ', livro);

console.log('Autor do livro: ', livro['autor']);

const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britânico'
}

livro.autor = autor;

console.log('Nome autor: ', livro.autor.nome);
