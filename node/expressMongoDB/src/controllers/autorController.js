import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({}); // find({}) método do mongoose
            res.status(200).json(listaAutores); // json() para retornar dados estruturados
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async listarAutoresPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id); // findById() método do mongoose
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async cadastrarAutores(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (error) {
            console.log('ERRO:', error);
            res.status(500).json({ message: `${error.message} - falha ao cadastrar autor` });
        }
    };


    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body); // findByIdAndUpdate() método do mongoose
            res.status(200).json({ message: "autor atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id); // findByIdAndDelete() método do mongoose
            res.status(200).json({ message: "autor excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão` });
        }
    };

};


export default AutorController;