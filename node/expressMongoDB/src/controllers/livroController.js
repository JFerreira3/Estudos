import livro from "../models/Livro.js";

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
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }

    
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body); // findByIdAndUpdate() método do mongoose
            res.status(200).json({message: "livro atualizado"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id); // findByIdAndDelete() método do mongoose
            res.status(200).json({message: "livro excluído com sucesso"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão` });
        }
    };

};


export default LivroController;