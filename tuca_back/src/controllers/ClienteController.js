const { request, response } = require('express');
const knex = require('../database/config/db');


module.exports = {

    async index(req = request, res = response) {
        try {
            const allFunc = await knex('clientes');
            
            if (allFunc) return res.status(200).json(allFunc);

            return res.status(404).json({ message: 'Nenhum cliente encontrado' })
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async create(req = request, res = response) {

        try {
            const params = req.body;
            await knex('clientes').insert(params);
    
            return res.status(201).json({
                message: 'Cliente cadastrado com sucesso!'
            })
        } catch (e) {
            return false;
        }
    },

    async update(req = request, res = response) {
        try {
            const params = req.body;
            const { id } = req.params;
            await knex('clientes').update(params).where({ id });
            return res.status(200).json({ message: 'Atualizado' })
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async delete(req = request, res = response) {
        try {
            const { id } = req.params;
            await knex('clientes').where({ id }).delete();
            return res.status(200).json({ message: 'Deletado com sucesso' })
        } catch (e) {
            return res.sendStatus(500);
        }
    },

    async alterPassword(req = request, res= response) {
        try {
            const { senha } = req.body;
            const { id } = req.params;
            const user = await knex('clientes').select('senha').where({ id });

            if (user) {
                await knex('clientes').update({ senha }).where({ id });
    
                return res.status(200).json({ message: 'Senha alterada com sucesso.' })
            }

            return res.status(404).json({ message: 'Cliente não cadastrado.' })
        } catch (e) {
            return res.sendStatus(500);
        }
    }
}