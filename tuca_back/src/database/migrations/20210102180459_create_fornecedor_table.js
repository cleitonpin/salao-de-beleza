const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('fornecedores', (t) => {
    t.increments('id').primary();
    t.string('nome').notNullable();
    t.string('razao_social').notNullable();
    t.string('cnpj', 14).notNullable();
    t.string('incricao_municipal', 11).notNullable();
    t.string('inscricao_estadual', 9).notNullable();
    t.string('observacao').notNullable();
    t.string('logradouro').notNullable();
    t.string('bairro').notNullable();
    t.string('complemento').notNullable();
    t.string('cidade').notNullable();
    t.string('estado').notNullable();
    t.string('telefone').notNullable();
    t.string('email').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('fornecedores');