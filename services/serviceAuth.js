jwt = require('jwt-simple');
moment = require('moment');

function crearToken (credenciales) {
	payload = {
		sub: credenciales.usuario,
		tip: credenciales.tipo,
		exp: moment().add(14, 'days').unix(),
	}
	
	return jwt.encode(payload, 'barco');
}

function abrirToken (token) {
	try {
		payload = jwt.decode(token, 'barco');
		return {
			usuario: payload.sub,
			tipo: payload.tip
		};
	} catch (err) {
		return 0
	}
}

module.exports = {
	crearToken,
	abrirToken
}