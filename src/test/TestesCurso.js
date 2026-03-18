const Curso = require('../model/Curso');
const CursoRepository = require('../repository/CursoRepository');

const repo = new CursoRepository();

async function executarTestes() {
  console.log('\n========================================');
  console.log('   TESTES DO BACKEND - CURSOS ONLINE');
  console.log('========================================\n');

 
  console.log('--- TESTE 1: INSERINDO CURSOS ---');
  const curso1 = new Curso(null, 'Desenvolvimento Web Full Stack', 'Aprenda HTML, CSS, JavaScript e Node.js do zero ao avançado.', 'Prof. Carlos Mendes', '240 horas', 'Intermediário', 899.90, 30, '2025-03-10', '6 meses');
  const curso2 = new Curso(null, 'Python para Data Science', 'Domine Python, Pandas, NumPy e Machine Learning.', 'Profa. Ana Beatriz Lima', '160 horas', 'Iniciante', 749.90, 25, '2025-03-15', '4 meses');
  const curso3 = new Curso(null, 'UX/UI Design Profissional', 'Crie interfaces incríveis com Figma e princípios de design.', 'Prof. Rafael Souza', '120 horas', 'Iniciante', 599.90, 20, '2025-04-01', '3 meses');

  await repo.inserir(curso1);
  await repo.inserir(curso2);
  await repo.inserir(curso3);


  console.log('\n--- TESTE 2: CONSULTANDO TODOS OS CURSOS ---');
  const todos = await repo.buscarTodos();
  todos.forEach(c => console.log(c.toString()));

  console.log('\n--- TESTE 3: BUSCANDO CURSO POR ID ---');
  const encontrado = await repo.buscarPorId(curso1.id);
  if (encontrado) console.log('Curso encontrado: ' + encontrado.toString());


  console.log('\n--- TESTE 4: ATUALIZANDO CURSO ---');
  curso1.nome = 'Full Stack Web com React e Node.js';
  curso1.preco = 999.90;
  curso1.vagas = 35;
  await repo.atualizar(curso1);
  const atualizado = await repo.buscarPorId(curso1.id);
  if (atualizado) console.log('Curso atualizado: ' + atualizado.toString());


  console.log('\n--- TESTE 5: EXCLUINDO CURSO ---');
  await repo.excluir(curso3.id);
  console.log('\nCursos restantes após exclusão:');
  const restantes = await repo.buscarTodos();
  restantes.forEach(c => console.log(c.toString()));

  console.log('\n========================================');
  console.log('   TODOS OS TESTES CONCLUÍDOS! ✅');
  console.log('========================================\n');

  process.exit(0);
}

executarTestes().catch(err => {
  console.error('❌ Erro nos testes:', err.message);
  process.exit(1);
});