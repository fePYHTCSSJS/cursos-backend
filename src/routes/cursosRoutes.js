const express = require('express');
const router = express.Router();
const CursoController = require('../controller/CursoController');

const controller = new CursoController();

router.get('/', (req, res) => controller.listarTodos(req, res));
router.get('/:id', (req, res) => controller.buscarPorId(req, res));
router.post('/', (req, res) => controller.inserir(req, res));
router.put('/:id', (req, res) => controller.atualizar(req, res));
router.delete('/:id', (req, res) => controller.excluir(req, res));

module.exports = router;