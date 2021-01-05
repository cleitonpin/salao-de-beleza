const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('agendamento', (t) => {
    t.increments('id').primary();
    t.integer('cliente_id').unsigned(); 
    t.foreign('cliente_id').references('clientes.id');
    t.integer('servico_id').unsigned();
    t.foreign('servico_id').references('servicos.id');
    t.string('horario').notNullable();
    t.date('data').notNullable();
    t.boolean('confirmado');
});

exports.down = (knex) => knex.schema.dropTable('agendamento');