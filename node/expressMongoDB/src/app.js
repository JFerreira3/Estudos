import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () =>{
    console.log("conectado com sucesso!");
    
});





const app = express(); // cria instância do express na variável app
app.use(express.json()) // executar express.json() para todas as requisições que forem compatíveis  com json


// const livros = [
//     {
//         id: 1,
//         titulo: 'O Senhor dos Anéis'
//     },
//     {
//         id: 2,
//         titulo: 'O Hobbit'
//     }
// ]



app.get('/', (req, res) => {
    res.status(200).send('Cruso de Node.js'); // send() para dados simples
});

app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({}); // find({}) método do mongoose
    res.status(200).json(listaLivros); // json() para retornar dados estruturados
});

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});


app.post('/livros', (req, res) => {
    console.log('BODY:', req.body)
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});


app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});


app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);

    res.status(200).send("Livro removido com sucesso");
});

export default app;
