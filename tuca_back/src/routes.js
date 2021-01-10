const express = require('express');
const AgendamentoController = require('./controllers/AgendamentoController');

const routes = express.Router();

const ClienteController = require('./controllers/ClienteController');
const FornecedorController = require('./controllers/FornecedorController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProdutoController = require('./controllers/ProdutoController');
const ServicoController = require('./controllers/ServicoController');
const UserController = require('./controllers/UserController');

routes

    // routes cliente
    .post('/', ClienteController.create)
    .get('/', ClienteController.index)
    .put('/:id', ClienteController.update)
    .delete('/:id', ClienteController.delete)
    .put('/cliente/password/:id', ClienteController.alterPassword)

    // routes funcionario
    .post('/funcionario', FuncionarioController.create)
    .get('/funcionario', FuncionarioController.index)
    .put('/funcionario/:id', FuncionarioController.update)
    .delete('/funcionadio/:id', FuncionarioController.delete)
    
    // routes fornecedor
    .post('/fornecedor', FornecedorController.create)
    .get('/fornecedor', FornecedorController.index)
    .put('/fornecedor/:id', FornecedorController.update)
    .delete('/fornecedor/:id', FornecedorController.delete)

    // routes servicos
    .post('/servico', ServicoController.create)
    .get('/servico', ServicoController.index)
    .put('/servico/:id', ServicoController.update)
    .delete('/servico/:id', ServicoController.delete)

    // routes users
    .post('/user', UserController.create)
    .get('/user', UserController.index)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)

    // routes agendamento
    .post('/agendar', AgendamentoController.create)
    .get('/agendamentos', AgendamentoController.index)
    .put('/agendamento/:id', AgendamentoController.update)
    .delete('/agendamento/:id', AgendamentoController.delete)

    // routes produtos
    .post('/produto', ProdutoController.create)
    .get('/produto', ProdutoController.index)
    .put('/produto/:id', ProdutoController.update)
    .delete('/produto/:id', ProdutoController.delete)
    ;

module.exports = routes;