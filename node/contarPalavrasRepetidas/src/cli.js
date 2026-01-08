import fs from 'fs'; // biblioteca para interagir com sistemas de arquivos do computador
import path from 'path' // biblioteca nativa do node para gerenciar caminhos relativos e absolutos de todos os arquivos gerenciáveis dentro do programa
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander'; // biblioteca externa npm i commander

const program = new Command(); // instancia da biblioteca 
program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado') // indicar opções que serão executadas na linha de comando
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error('erro: favor inserir caminho de origem e destino');
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivos(caminhoTexto, caminhoDestino);
            console.log('Texto processado com sucesso!');
        } catch (error) {
            console.log('Ocorreu um erro no processamento', erro);
        }
    });

// COMANDO PARA RODAR PROGRAMA, na pasta src: node cli.js ../arquivos/texto-web.txt ../resultados
program.parse();

const caminhoArquivo = process.argv;
// precess.argv passa instruções para o terminal que vão para dentro de um array

console.log(caminhoArquivo);
// resultado utilizando comando "node cli.js":
/*
        [
            'D:\\Program Files\\node.exe',
            'D:\\Documents\\Estudos\\node\\src\\index.js'
        ] 
*/



console.log(caminhoArquivo[2]);
// resultado utilizando comando "node cli.js ../arquivos/texto-web.txt":
/*
        [
            'D:\\Program Files\\node.exe',
            'D:\\Documents\\Estudos\\node\\src\\index.js',
            '../arquivos/texto-web.txt'
        ] 
*/


// RODAR COMANDO DENTRO DA PASTA (sem utilizar o commander) src:  node cli.js ../arquivos/texto-web.txt ../resultados
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];


function processaArquivos(texto, destino) {
    //link
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro; // se erro, já cai no catch antes de execuitar contaPalavras()
            const resultado = contaPalavras(texto);
            //endereco
            criaESalvaArquivo(resultado, destino);
        } catch (error) {
            console.log(trataErros(error));

        }
    });
}





// -------------- UTILIZANDO ASYNC AWAIT ----------------

// async function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try {
//         await fs.promises.writeFile(arquivoNovo, textoPalavras);
//         console.log('Arquivo criado');
//     } catch (error) {
//         throw error;

//     }
// }


// -------------- UTILIZANDO THEN ----------------

function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);

    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            console.log('Arquivo criado');
        }).catch((erro) => {
            throw erro;
        }).finally(() => console.log('Operação finalizada!')); // finally é executado independente do erro ou do sucesso, é sempre a última etapa do then()

}