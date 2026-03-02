const conexao = require('./Conexao');
const Curso = require('../model/Curso');

class CursoRepository {

  // INSERIR
  async inserir(curso) {
    const sql = `INSERT INTO cursos (nome, descricao, instrutor, carga_horaria, nivel, preco, vagas, data_inicio, duracao)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const valores = [
      curso.nome,
      curso.descricao,
      curso.instrutor,
      curso.cargaHoraria,
      curso.nivel,
      curso.preco,
      curso.vagas,
      curso.dataInicio,
      curso.duracao
    ];
    const [resultado] = await conexao.execute(sql, valores);
    curso.id = resultado.insertId;
    console.log(`✅ Curso inserido com ID: ${curso.id}`);
    return curso;
  }

  // ATUALIZAR
  async atualizar(curso) {
    const sql = `UPDATE cursos SET nome=?, descricao=?, instrutor=?, carga_horaria=?, nivel=?, preco=?, vagas=?, data_inicio=?, duracao=?
                 WHERE id=?`;
    const valores = [
      curso.nome,
      curso.descricao,
      curso.instrutor,
      curso.cargaHoraria,
      curso.nivel,
      curso.preco,
      curso.vagas,
      curso.dataInicio,
      curso.duracao,
      curso.id
    ];
    await conexao.execute(sql, valores);
    console.log(`✅ Curso ID ${curso.id} atualizado com sucesso!`);
  }

  // EXCLUIR
  async excluir(id) {
    const sql = `DELETE FROM cursos WHERE id=?`;
    await conexao.execute(sql, [id]);
    console.log(`✅ Curso ID ${id} excluído com sucesso!`);
  }

  // BUSCAR POR ID
  async buscarPorId(id) {
    const sql = `SELECT * FROM cursos WHERE id=?`;
    const [rows] = await conexao.execute(sql, [id]);
    if (rows.length === 0) {
      console.log(`⚠️ Curso ID ${id} não encontrado.`);
      return null;
    }
    const r = rows[0];
    return new Curso(r.id, r.nome, r.descricao, r.instrutor, r.carga_horaria, r.nivel, r.preco, r.vagas, r.data_inicio, r.duracao);
  }

  // BUSCAR TODOS
  async buscarTodos() {
    const sql = `SELECT * FROM cursos`;
    const [rows] = await conexao.execute(sql);
    return rows.map(r => new Curso(r.id, r.nome, r.descricao, r.instrutor, r.carga_horaria, r.nivel, r.preco, r.vagas, r.data_inicio, r.duracao));
  }
}

module.exports = CursoRepository;