const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'cursos_db',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = conexao;
