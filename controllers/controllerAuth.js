modelMysql = require('../models/modelMysql');
serviceAuth = require('../services/serviceAuth');


function login(req, res) {
	if (typeof req.body.usuario !== 'undefined' && typeof req.body.contrasena !== 'undefined') {
    modelMysql.getTipoUsuario({usuario: req.body.usuario, contrasena: req.body.contrasena}, function(error, data) {
      if (typeof data[0] !== 'undefined') {
        res.status(200).json({
          exito: true,
          token: serviceAuth.crearToken({usuario: data[0].id, tipo: data[0].puesto})
        });
      }
      else {
        res.status(404).json({
          exito: false,
          status: 404,
          error: "NotFound",
          detalles: "Usuario no encontrado"});
      }
    });
  }
  else {
    res.status(400).json({
      exito: false,
      status: 400,
      error: "BadRequest",
      detalles: "Los parametros usuario y/o contrasena estan incompletos"
    });
  }
}

module.exports = {
  login
}