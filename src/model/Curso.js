class Curso {
  constructor(id, nome, descricao, instrutor, cargaHoraria, nivel, preco, vagas, dataInicio, duracao) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.instrutor = instrutor;
    this.cargaHoraria = cargaHoraria;
    this.nivel = nivel;
    this.preco = preco;
    this.vagas = vagas;
    this.dataInicio = dataInicio;
    this.duracao = duracao;
  }

  toString() {
    return `Curso [id=${this.id}, nome=${this.nome}, instrutor=${this.instrutor}, nivel=${this.nivel}, preco=R$${this.preco}, vagas=${this.vagas}]`;
  }
}

module.exports = Curso;