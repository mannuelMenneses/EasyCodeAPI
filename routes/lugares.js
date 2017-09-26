model = require('../models/model');

module.exports = function(app){

	/**
	*@api{get} /paises Paises
	*@apiName Paises
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*@apiDescription Regresa listado de paises
	*
	*@apiSuccess {Boolean} exito Muestra estado de la consulta
	*@apiSuccess {String[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess {Number} id Identificador del pais
	*@apiSuccess {String} nombre Nombre del pais
	*
	*@apiSuccessExample {json} Ejemplo
	*{
	*	"exito": true,
	*	"resultados": [
	*		{
	*			"id": 1,
	*			"nombre": "México"
	*		},
	*		{
	*			"id": 2,
	*			"nombre": "Estados Unidos de América"
	*		}
	*	]
	*}
	*/
    app.get('/paises', function(req, res){
        model.getPaises(function(error, data) {
        	res.status(200).json({
        		exito: true,
        		resultados: data
        	});
        });
    });

    /**
	*@api{get} /estados Estados
	*@apiName Estados
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*@apiDescription Regresa listado de estados
	*
	*@apiSuccess {Boolean} exito Muestra estado de la consulta
	*@apiSuccess {String[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess {Number} id Identificador del estado
	*@apiSuccess {String} nombre Nombre del estado
	*
	*@apiSuccessExample {json} Ejemplo
	*{
	*	"exito": true,
	*	"resultados": [
	*		{
	*			"id": 1,
	*			"nombre": "Ciudad de México (CDMX)"
	*		},
	*		{
	*			"id": 2,
	*			"nombre": "Jalisco (JAL)"
	*		}
	*	]
	*}
	*/
    app.get('/estados', function(req, res){
        model.getEstados(function(error, data) {
        	res.status(200).json({
        		exito: true,
        		resultados: data
        	});
        });
    });
}