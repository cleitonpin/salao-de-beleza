const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.table('servicos', (t) => {
    t.dropColumn('inscricao_estadual');
});

exports.down = (knex) => knex.schema.dropTable('servicos');