const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('servicos', (t) => {
    t.increments('id').primary();
    t.string('nome').notNullable();
    t.string('duracao_maxima').notNullable();
    t.string('descricao').notNullable();
    t.string('valor').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('servicos');