const readLine = require('readline'); // carregar biblioteca e guardar em uma constante

const leitor = readLine.createInterface({ // criando interface
    input: process.stdin, // indicando que o terminal será a entrada
    output: process.stdout // indicando que o terminal será a saída
});

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá, ', nome);

    leitor.question('Qual é a sua idade? ', (idade) => {

        if (idade >= 18) {
            console.log('Maior de idade');
        } else {
            console.log('menor de idade');
        }

        leitor.close();
    });
});
