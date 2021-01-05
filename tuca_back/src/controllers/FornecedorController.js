const { request, response } = require('express');
const knex = require('../database/config/db');


module.exports = {
    async index(req = request, res = response) {
        try {
            const allFunc = await knex('fornecedores');
            
            if (allFunc) return res.status(200).json(allFunc);

            return res.status(404).json({ message: 'Nenhum fornecedor encontrado' })
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async create(req = request, res = response) {

        try {
            const params = req.body;
            await knex('fornecedores').insert(params);
    
            return res.status(201).json({
                message: 'Fornecedor cadastrado com sucesso!'
            })
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async update(req = request, res = response) {
        try {
            const params = req.body;
            const { id } = req.params;
            await knex('fornecedores').update(params).where({ id });
            return res.status(200).json({ message: 'Atualizado' })
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async delete(req = request, res = response) {
        try {
            const { id } = req.params;
            await knex('fornecedores').where({ id }).delete();
            return res.status(200).json({ message: 'Deletado com sucesso' })
        } catch (e) {
            return res.sendStatus(500);
        }
    }
}