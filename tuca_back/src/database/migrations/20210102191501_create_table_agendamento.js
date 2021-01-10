const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('agendamento', (t) => {
    t.increments('id').primary();
    t.string('nome_cliente').notNullable();
    t.integer('servico_id').unsigned();
    t.foreign('servico_id').references('servicos.id');
    t.string('horario').notNullable();
    t.date('data').notNullable();
    t.boolean('confirmado');
});

exports.down = (knex) => knex.schema.dropTable('agendamento');