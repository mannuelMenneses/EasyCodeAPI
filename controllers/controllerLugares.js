modelMysql = require('../models/modelMysql');

function getPaises(req, res) {
	modelMysql.getPaises(function(error, data) {
		if(!data.sqlMessage) {
		  res.status(200).json({
		    exito: true,
		    resultados: data
		  });
		}
		else {
		  res.status(500).json({
		    exito: false,
		    status: 500,
		    error: "InternalServerError",
		    detalles: data.sqlMessage
		  });
		}
	});
}

function getProvincia(req, res) {
	if (typeof req.body.pais !== 'undefined') {
		modelMysql.getProvincia(req.body.pais, function(error, data) {
			if(!data.sqlMessage) {
		      res.status(200).json({
		        exito: true,
		        resultados: data
		      });
		    }
		    else {
		      res.status(500).json({
		        exito: false,
		        status: 500,
		        error: "InternalServerError",
		        detalles: data.sqlMessage
		      });
		    }
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