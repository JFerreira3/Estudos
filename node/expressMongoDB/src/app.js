import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () =>{
    console.log("conectado com sucesso!");
    
});

const app = express(); // cria instância do express na variável app
routes(app);






app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);

    res.status(200).send("Livro removido com sucesso");
});

export default app;
