controllerLugares = require('../controllers/controllerLugares');

module.exports = function(app){

	/**
	*@api{get} /estados Estados
	*@apiName Estados
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*@apiDescription Regresa listado de estados
	*
	*@apiSuccess {Boolean} exito Muestra estado de la consulta
	*@apiSuccess {Object[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess {Number} resultados.id Identificador del estado
	*@apiSuccess {String} resultados.nombre Nombre del estado
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
    	controllerLugares.getEstados(res);
    });

	/**
	*@api{get} /paises Paises
	*@apiName Paises
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*@apiDescription Regresa listado de paises
	*
	*@apiSuccess {Boolean} exito Muestra estado de la consulta
	*@apiSuccess {Object[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess {Number} resultados.id Identificador del pais
	*@apiSuccess {String} resultados.nombre Nombre del pais
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
    	controllerLugares.getPaises(res);
    });
}