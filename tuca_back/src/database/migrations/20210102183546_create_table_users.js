const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.interger('funcionario_id').unsigned();
    t.foreign('funcionario_id').references('funcionarios.id');
    t.string('usuario').notNullable();
    t.string('senha').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('users');