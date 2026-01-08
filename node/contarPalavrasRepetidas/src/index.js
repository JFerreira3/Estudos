
export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.filter((paragrafo) => paragrafo) // filter para remover objetos vazios retornados na quebra de parágrafos
        .map((paragrafo) => {
            return verificaPalavrasDuplicadas(paragrafo);
        });
    // ^^^^^^^^^^^^^^^ essa parte da contagem também pode ser feita utilizando flatMap:
    /*  
        const contagem =  paragrafos.flatMap((paragrafo) => {
           if (!paragrafo)  return [];
            return verificaPalavrasDuplicadas(paragrafo);
        }); 
    */

    // flatMap nada mais é do que o [].flat() + [].map()
    /*
        exemplo de flat():
            [1, 2, [3, 4]].flat() = [1, 2, 3, 4]
    */
    ''
    console.log('constagem', contagem);
    return contagem;
}

function extraiParagrafos(texto) {

    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavras) {
    // remover caracteres especiais
    return palavras.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto) {
    // criar um array com as palavras
    // contrar as ocorrências
    // montar um objeto com o resultado, exemplo:
    /*
        {
            "web": 5,
            "computador": 4
        }
    */


    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) { // ignorar palavras curtas, geralmente pronomes
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }

    });

    return resultado;
}


