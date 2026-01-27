import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({}); // find({}) método do mongoose
            res.status(200).json(listaLivros); // json() para retornar dados estruturados
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }

    };

    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id); // findById() método do mongoose
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async cadastrarLivros(req, res) {
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            await livro.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }


    static async atualizarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            await livro.findByIdAndUpdate(id, livroCompleto); // findByIdAndUpdate() método do mongoose
            res.status(200).json({ message: "livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id); // findByIdAndDelete() método do mongoose
            res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão` });
        }
    };

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na busca` });
        }

    }

};


export default LivroController;