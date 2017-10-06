modelMysql = require('../models/modelMysql')
jwt = require('jwt-simple')
moment = require('moment')

controllerAuth = {}

controllerAuth.login = function(credenciales, callback) {
	if (credenciales.usuario && credenciales.contrasena) {
    modelMysql.login(credenciales, function(error, data) {
      if(error) {
        callback({
          exito: false,
          status: 500,
          error: "InternalServerError",
          detalles: data.sqlMessage
        })
      }
      else {
        if (data[0]) {
          if (data[0].status == 1) {
            callback({
              exito: true,
              status: 200,
              token: jwt.encode({sub: credenciales.usuario, exp: moment().add(14, 'days').unix()}, 'barco'),
              tipo: data[0].puesto
            })
          }
          else {
            callback({
              exito: false,
              status: 403,
              error: "Forbidden",
              detalles: "Este usuario ha sido desactivado"
            })
          }
        }
        else {
          callback({
            exito: false,
            status: 404,
            error: "NotFound",
            detalles: "Usuario no encontrado"
          })
        }
      }
    })
  }
  else {
    callback({
      exito: false,
      status: 400,
      error: "BadRequest",
      detalles: "Los parametros estan incompletos"
    })
  }
}

controllerAuth.abrirToken = function (token, callback) {
  try {
    payload = jwt.decode(token, 'barco')
    modelMysql.getTipo(payload.sub, function(error, data) {
      if(error) {
        callback(0)
      }
      else {
        callback(data[0].puesto)
      }
    });
  } catch (err) {
    callback(0)
  }
}

module.exports = controllerAuth