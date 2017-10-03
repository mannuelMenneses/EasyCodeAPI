modelMysql = require('../models/modelMysql');

function getPaises(req, res) {
	modelMysql.getPaises(function(error, data) {
		res.status(200).json({
			exito: true,
			resultados: data
		});
	});
}

function getProvincia(req, res) {
	if (typeof req.body.pais !== 'undefined') {
		modelMysql.getProvincia(req.body.pais, function(error, data) {
			res.status(200).json({
				exito: true,
				resultados: data
			});
		});
	}
	else {
		res.status(400).json({
		    exito: false,
		    status: 400,
		    error: "BadRequest",
		    detalles: "Los parametros estan incompletos"
	    });
	}
}

module.exports = {
	getPaises,
	getProvincia
}