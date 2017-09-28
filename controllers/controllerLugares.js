modelMysql = require('../models/modelMysql');

function getEstados(req, res) {
	modelMysql.getEstados(function(error, data) {
		res.status(200).json({
			exito: true,
			resultados: data
		});
	});
}

function getPaises(req, res) {
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