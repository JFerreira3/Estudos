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


export default app;
