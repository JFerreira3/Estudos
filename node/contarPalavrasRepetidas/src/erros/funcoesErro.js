export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        return 'Arquivo não encontrado';
    } else {
        console.log('erro: ', erro)
        return 'Erro na aplicação'
    }
};


