import http from "http"; // nativa do node

const PORT = 3000;  // 3000 é a porta de comunicação que será utilizada na API (localhost:3000)

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Rota livros",
    "/autores": "Rota autores",
};

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": 'text/plain' });  // cabeçalho (headers) possuem todas as informações necessárias para a requisição funcionar
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("servidor escutando!");    
});

