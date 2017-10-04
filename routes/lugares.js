controllerLugares = require('../controllers/controllerLugares');

module.exports = function(app){

	/**
	*@api{get} /paises Paises
	*@apiName Paises
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*@apiDescription Regresa listado de paises
	*
	*@apiSuccess (Exito) {Boolean} exito Muestra estado de la consulta
	*@apiSuccess (Exito) {Object[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess (Exito) {Number} resultados.id Identificador del pais
	*@apiSuccess (Exito) {String} resultados.nombre Nombre del pais
	*
	*@apiSuccessExample {json} Exito 200
	*{
	*	"exito": true,
	*	"resultados": [
	*		{
	*			"id": 1,
	*			"nombre": "México"
	*		},
	*		{
	*			"id": 2,
	*			"nombre": "Estados Unidos de America"
	*		}
	*	]
	*}
	*
	*@apiError (Error) {Boolean} exito Muestra estado de la consulta
	*@apiError (Error) {Number} status Código de error
	*@apiError (Error) {String} error Nombre del error
	*@apiError (Error) {String} detalles Muestra detalles
	*
	*@apiErrorExample {json} Error 500
	*{
	*	"exito": false,
	*	"status": 500,
	*	"error": "InternalServerError",
	*	"detalles": "No se puede acceder a la base de datos"
	*}
	*/
    app.get('/paises', function(req, res) {
    	controllerLugares.getPaises(req, res);
    });

    /**
	*@api{post} /provincia Provincias
	*@apiName Provincias
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*@apiDescription Regresa listado de estados
	*
	*@apiParam (Post) {String} pais Identificador de pais
	*
	*@apiSuccess (Exito) {Boolean} exito Muestra estado de la consulta
	*@apiSuccess (Exito) {Object[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess (Exito) {Number} resultados.id Identificador del estado
	*@apiSuccess (Exito) {String} resultados.nombre Nombre del estado
	*
	*@apiSuccessExample {json} Exito 200
	*{
	*	"exito": true,
	*	"resultados": [
	*		{
	*			"id": 1,
	*			"nombre": "Ciudad de México"
	*		},
	*		{
	*			"id": 2,
	*			"nombre": "Puebla"
	*		}
	*	]
	*}
	*
	*@apiError (Error) {Boolean} exito Muestra estado de la consulta
	*@apiError (Error) {Number} status Código de error
	*@apiError (Error) {String} error Nombre del error
	*@apiError (Error) {String} detalles Muestra detalles
	*
	*@apiErrorExample {json} Error 500
	*{
	*	"exito": false,
	*	"status": 500,
	*	"error": "InternalServerError",
	*	"detalles": "No se puede acceder a la base de datos"
	*}
	*/
    app.post('/provincias', function(req, res) {
    	controllerLugares.getProvincia(req, res);
    });
}