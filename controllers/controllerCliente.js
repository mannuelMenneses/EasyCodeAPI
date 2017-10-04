modelMysql = require('../models/modelMysql');
serviceAuth = require('../services/serviceAuth');

function nuevoCliente(req, res) {
  if (typeof req.headers.token !== 'undefined' && typeof req.body.nombre !== 'undefined' && typeof req.body.apellidos !== 'undefined' && typeof req.body.tipo !== 'undefined' && typeof req.body.correo !== 'undefined') {
    token = serviceAuth.abrirToken(req.headers.token);
    if (typeof token == 'object') {
      cliente = [
        req.body.nombre,
        req.body.apellidos,
        req.body.tipo,
        req.body.correo,
        req.body.telefono,
        req.body.provincia,
        req.body.direccion,
        req.body.cp
      ];
      modelMysql.setCliente(cliente, function(error, data) {
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
	nuevoCliente
}