modelMysql = require('../models/modelMysql');
serviceAuth = require('../services/serviceAuth');

function nuevoSeguimiento(req, res) {
  if (typeof req.headers.token !== 'undefined' && typeof req.body.cliente !== 'undefined' && typeof req.body.asunto !== 'undefined' && typeof req.body.fecha !== 'undefined' && typeof req.body.descripcion !== 'undefined') {
    token = serviceAuth.abrirToken(req.headers.token);
    if (typeof token == 'object') {
      seguimiento = [
        req.body.cliente,
        req.body.asunto,
        req.body.fecha,
        req.body.descripcion,
        token.usuario
      ];
      modelMysql.setSeguimiento(seguimiento, function(error, data) {
        if(!data.sqlMessage) {
          res.status(201).json({exito: true});
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
      res.status(403).json({
        exito: false,
        status: 403,
        error: "Forbidden",
        detalles: "No se tiene permiso para hacer esta accion"
      });
    }
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
	nuevoSeguimiento
}