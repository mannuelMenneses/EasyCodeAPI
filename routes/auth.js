bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{get} /login Login
	*@apiName Login
	*@apiGroup Auth
	*@apiVersion 1.0.0
	*@apiDescription Regresa token unico para el usuario [INCOMPLETO]
	*
	*@apiParam {String} usuario Nombre de usuario o correo electronico
	*@apiParam {String} contrasena Contraseña de usuario
	*
	*@apiSuccess {Boolean} exito Muestra estado de la consulta
	*@apiSuccess {Token} token Falta por implementar
	*
	*@apiSuccessExample {json} Ejemplo
	*{
	*	"exito": true,
	*	"token": "Aun no implementado"
	*}
	*
	*@apiError (Error 404) {Boolean} exito Muestra estado de la consulta
	*@apiError (Error 404) {Number} status Codigo de error
	*@apiError (Error 404) {String} error Nombre del error
	*@apiError (Error 404) {String} detalles Muestra detalles
	*
	*@apiErrorExample {json} Ejemplo
	*{
	*	"exito": false,
	*	"status": 404,
	*	"error": "ParametrosIncompletos",
	*	"detalles": "Los parametros usuario y/o contrasena estan incompletos"
	*}
	*/
    app.post('/login', function(req, res){
    	if (typeof req.body.usuario !== 'undefined' && typeof req.body.contrasena !== 'undefined') {
    		var credenciales = [req.body.usuario, req.body.contrasena];
	    	res.status(200).json({
	    		exito: true,
	    		resultados: credenciales
	    	});
    	}
    	else {
    		res.status(404).json({
	    		exito: false,
	    		status: 404,
	    		error: "ParametrosIncompletos",
	    		detalles: "Los parametros usuario y/o contrasena estan incompletos"
	    	});
    	}
    });
}