model = require('../models/model');

module.exports = function(app){

	/**
	*@api{get} /pais/get Paises
	*@apiName Paises
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*
	*@apiSuccess {Number} id Identificador del pais
	*@apiSuccess {String} nombre Nombre del pais
	*
	*@apiSuccessExample {json} Ejemplo
	*[
	*	{
	*		"id": 1,
	*		"nombre": "México"
	*	},
	*	{
	*		"id": 2,
	*		"nombre": "Estados Unidos de America"
	*	}
	*]
	*/
    app.get('/pais/get', function(req, res){
        model.getPaises(function(error, data) {
        	res.status(200).json(data);
        });
    });

    /**
	*@api{get} /estado/get Estados
	*@apiName Estados
	*@apiGroup Lugares
	*@apiVersion 1.0.0
	*
	*@apiSuccess {Number} id Identificador del estado
	*@apiSuccess {String} nombre Nombre del estado
	*
	*@apiSuccessExample {json} Ejemplo
	*[
	*	{
	*		"id": 1,
	*		"nombre": "Ciudad de México (CDMX)"
	*	},
	*	{
	*		"id": 2,
	*		"nombre": "Jalisco (JAL)"
	*	}
	*]
	*/
    app.get('/estado/get', function(req, res){
        model.getEstados(function(error, data) {
        	res.status(200).json(data);
        });
    });
}