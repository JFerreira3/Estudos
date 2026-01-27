import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => req.status(200).send("Curso de Node.js"));
    app.use(express.json(), livros, autores); // inclui midlewares na instancia do express
};

export default routes;