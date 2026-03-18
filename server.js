const express = require('express');
const cursoRoutes = require('./src/routes/cursosRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/cursos', cursoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});