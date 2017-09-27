modelMysql = require('../models/modelMysql');

function getEstados(res) {
	modelMysql.getEstados(function(error, data) {
		res.status(200).json({
			exito: true,
			resultados: data
		});
	});
}

function getPaises(res) {
	modelMysql.getPaises(function(error, data) {
		res.status(200).json({
			exito: true,
			resultados: data
		});
	});
}

module.exports = {
	getPaises,
	getEstados
}