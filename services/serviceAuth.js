jwt = require('jwt-simple');
moment = require('moment');

function login (credenciales) {
	payload = {
		sub: credenciales.usuario,
		tip: credenciales.tipo,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix(),
	}

	return jwt.encode(payload, 'barco');
}

module.exports = {
	login
}