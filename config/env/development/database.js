module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'zaitech'),
			user: env('DATABASE_USERNAME', 'zaitech'),
			password: env('DATABASE_PASSWORD', 'zaitech'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
