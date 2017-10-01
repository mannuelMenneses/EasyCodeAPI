modelMysql = require('../models/modelMysql');
serviceAuth = require('../services/serviceAuth');
moment = require('moment');

function nuevaNoticia(req, res) {
  if (typeof req.headers.token !== 'undefined' && typeof req.body.titulo !== 'undefined' && typeof req.body.contenido !== 'undefined') {
    token = serviceAuth.abrirToken(req.headers.token);
    if (typeof token == 'object') {
      if (token.tipo == 1 || token.tipo == 2) {
        noticia = [
          req.body.titulo,
          req.body.contenido,
          moment().format('YYYY-MM-DD'),
          token.usuario,
          req.body.imagen
        ];
        modelMysql.setNoticia(noticia, function(error, data) {
          if(data && data.insertId) {
            res.status(200).json({exito: true});
          }
          else {
            res.status(500).json({
              exito: false,
              status: 500,
              error: "InternalServerError",
              detalles: "Error el insertar datos"
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
	nuevaNoticia
}