let config = {
	middleware: [],
	// socket: 'http://localhost:8000',
}

if (process.env.NODE_ENV == 'production') {
	config.middleware = ['redirect-ssl']
	// config.socket = 'https://example-cb-api.herokuapp.com/'
}

module.exports = config
