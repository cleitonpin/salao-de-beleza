require('dotenv/config');

module.exports = {

	development: {
		client: 'pg',
		connection: {
			database: 'mozar',
			user: 'postgres',
			password: 'post',
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/src/database/migrations`,
		},
		useNullAsDefault: true,
	},

	production: {
		client: 'pg',
		connection: process.env.DB_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/src/migrations`,
		},
		useNullAsDefault: true,
	},

};