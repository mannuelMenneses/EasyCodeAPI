modelMysql = require('../models/modelMysql');
serviceAuth = require('../services/serviceAuth');

function nuevoEmpleado(req, res) {
  if (typeof req.headers.token !== 'undefined' && typeof req.body.contrasena !== 'undefined' && typeof req.body.nombre !== 'undefined' && typeof req.body.apellidos !== 'undefined' && typeof req.body.puesto !== 'undefined' && typeof req.body.correo !== 'undefined') {
    token = serviceAuth.abrirToken(req.headers.token);
    if (typeof token == 'object') {
      if (token.tipo == 1) {
        empleado = [
          req.body.nickname,
          req.body.contrasena,
          req.body.nombre,
          req.body.apellidos,
          req.body.puesto,
          req.body.telefono,
          req.body.correo,
          req.body.provincia,
          req.body.fdn
        ];
        modelMysql.setEmpleado(empleado, function(error, data) {
          if(data.insertId) {
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
	nuevoEmpleado
}