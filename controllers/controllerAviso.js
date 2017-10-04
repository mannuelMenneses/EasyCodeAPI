modelMysql = require('../models/modelMysql');
serviceAuth = require('../services/serviceAuth');
moment = require('moment');

function avisos(req, res) {
  if (typeof req.headers.token !== 'undefined') {
    token = serviceAuth.abrirToken(req.headers.token);
    if (typeof token == 'object') {
      numero = 5;
      if (typeof req.params.numero !== 'undefined') {
        numero = parseInt(req.params.numero);
      }
      modelMysql.getAvisos(token.tipo, numero, function(error, data) {
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
      })
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
      detalles: "No se recibio token"
    });
  }
}

function nuevoAviso(req, res) {
  if (typeof req.headers.token !== 'undefined' && typeof req.body.titulo !== 'undefined' && typeof req.body.contenido !== 'undefined' && typeof req.body.nivel !== 'undefined' && !isNaN(req.body.nivel) && req.body.nivel > 0 && req.body.nivel < 3) {
    token = serviceAuth.abrirToken(req.headers.token);
    if (typeof token == 'object') {
      if (token.tipo == 1) {
        aviso = [
          req.body.titulo,
          req.body.contenido,
          moment().format('YYYY-MM-DD'),
          token.usuario,
          req.body.nivel,
          req.body.archivo
        ];
        modelMysql.setAviso(aviso, function(error, data) {
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
      detalles: "Los parametros estan incompletos o son incorrectos"
    });
  }
}

module.exports = {
	avisos,
  nuevoAviso
}