controllerAuth = require('../controllers/controllerAuth');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{get} /login Login
	*@apiName Login
	*@apiGroup Auth
	*@apiVersion 1.0.0
	*@apiDescription Regresa token unico para el usuario
	*
	*@apiParam {String} usuario Nombre de usuario o correo electronico
	*@apiParam {String} contrasena Contraseña de usuario
	*
	*@apiSuccess {Boolean} exito Muestra estado de la consulta
	*@apiSuccess {Token} token Token unico de usuario
	*
	*@apiSuccessExample {json} Ejemplo
	*{
	*	"exito": true,
	*	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNTA2NTM4NTI5LCJleHAiOjE1MDc3NDgxMjl9.DX3nBM6_6iT55HwclaNddlUadfzsEgReeRm1OF-5NxE"
	*}
	*
	*@apiError (Error) {Boolean} exito Muestra estado de la consulta
	*@apiError (Error) {Number} status Codigo de error
	*@apiError (Error) {String} error Nombre del error
	*@apiError (Error) {String} detalles Muestra detalles
	*
	*@apiErrorExample {json} Error 400
	*{
	*	"exito": false,
	*	"status": 400,
	*	"error": "SolicitudIncorrecta",
	*	"detalles": "Los parametros usuario y/o contrasena estan incompletos"
	*}
	*
	*@apiErrorExample {json} Error 404
	*{
	*	"exito": false,
	*	"status": 404,
	*	"error": "NoEncontrado",
	*	"detalles": "No se encontro al usuario"
	*}
	*/
    app.post('/login', function(req, res) {
    	controllerAuth.login(req, res);
    });
}