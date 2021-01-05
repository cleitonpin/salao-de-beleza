const Knex = require("knex");

exports.up = (knex = Knex) => knex.schema.createTable('produto', (t) => {
    t.increments('id').primary();
    t.integer('fornecedor_id').unsigned();
    t.foreign('fornecedor_id').references('fornecedores.id');
    t.string('nome').notNullable(); 
    t.decimal('preco_compra').notNullable();
    t.decimal('preco_venda').notNullable();
    t.string('descricao').notNullable();
    t.string('tipo').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('produto');