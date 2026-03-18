const CursoRepository = require('../repository/CursoRepository');
const Curso = require('../model/Curso');

class CursoController {
  constructor() {
    this.repository = new CursoRepository();
  }

  async listarTodos(req, res) {
    try {
      const cursos = await this.repository.buscarTodos();
      res.status(200).json(cursos);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao buscar cursos', erro: erro.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const id = req.params.id;
      const curso = await this.repository.buscarPorId(id);
      if (!curso) {
        return res.status(404).json({ mensagem: 'Curso não encontrado' });
      }
      res.status(200).json(curso);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao buscar curso', erro: erro.message });
    }
  }

  async inserir(req, res) {
    try {
      const { nome, descricao, instrutor, cargaHoraria, nivel, preco, vagas, dataInicio, duracao } = req.body;
      const curso = new Curso(null, nome, descricao, instrutor, cargaHoraria, nivel, preco, vagas, dataInicio, duracao);
      const novo = await this.repository.inserir(curso);
      res.status(201).json(novo);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao inserir curso', erro: erro.message });
    }
  }

  async atualizar(req, res) {
    try {
      const id = req.params.id;
      const { nome, descricao, instrutor, cargaHoraria, nivel, preco, vagas, dataInicio, duracao } = req.body;
      const curso = new Curso(id, nome, descricao, instrutor, cargaHoraria, nivel, preco, vagas, dataInicio, duracao);
      await this.repository.atualizar(curso);
      res.status(200).json({ mensagem: 'Curso atualizado com sucesso' });
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao atualizar curso', erro: erro.message });
    }
  }

  async excluir(req, res) {
    try {
      const id = req.params.id;
      await this.repository.excluir(id);
      res.status(200).json({ mensagem: 'Curso excluído com sucesso' });
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao excluir curso', erro: erro.message });
    }
  }
}

module.exports = CursoController;