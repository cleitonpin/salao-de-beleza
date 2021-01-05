const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('clientes', (t) => {
    t.increments('id').primary();
    t.string('nome').notNullable();
    t.string('senha').notNullable();
    t.string('data_nascimento').notNullable();
    t.string('telefone').notNullable();
    t.string('email').notNullable();
    t.string('rg').notNullable();
    t.string('cpf').notNullable();
    t.string('sexo').notNullable();
    t.string('numero').notNullable();
    t.string('logradouro').notNullable();
    t.string('bairro').notNullable();
    t.string('complemento').notNullable();
    t.string('cidade').notNullable();
    t.string('estado').notNullable();
    t.string('cep').notNullable();
    
});

exports.down = (knex) => knex.schema.dropTable('clientes');