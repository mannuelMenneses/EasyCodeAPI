controllerAuth = require('../controllers/controllerAuth');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{post} /login
	*@apiName Login
	*@apiGroup Auth
	*@apiVersion 1.0.0
	*@apiDescription Regresa token único para el usuario y el tipo de usuario que es (1 = Administrador / 2 = Empleado)
	*
	*@apiParam (Post) {String} usuario Nombre de usuario o correo electronico
	*@apiParam (Post) {String} contrasena Contraseña de usuario
	*
	*@apiSuccess (Exito) {Boolean} exito Muestra estado de la consulta
	*@apiSuccess (Exito) {Number} status Código de exito
	*@apiSuccess (Exito) {Token} token Token único de usuario
	*@apiSuccess (Exito) {Number} tipo Tipo de usuario (1 = Administrador / 2 = Empleado)
	*
	*@apiSuccessExample {json} Exito 200
	*{
	*	"exito": true,
	*	"status": 200,
	*	"token": "eyJ0eXAiOiJKV2QiLCJhbGciOiJIUzI1Niu9.eyJzdWIiOdJ1c3VhcmlvIiwiaWF0IjoxNTA2NTM4NFI5LCJleHAiOjE1MDc3UDgxMjl9.DX3nBM6_6iT55HwclaNddlUadfzsEgReeRm1OF-5NxE"
	*	"tipo": 2
	*}
	*
	*@apiError (Error) {Boolean} exito Muestra estado de la consulta
	*@apiError (Error) {Number} status Código de error
	*@apiError (Error) {String} error Nombre del error
	*@apiError (Error) {String} detalles Muestra detalles
	*
	*@apiErrorExample {json} Error 400
	*{
	*	"exito": false,
	*	"status": 400,
	*	"error": "BadRequest",
	*	"detalles": "Los parametros usuario y/o contrasena estan incompletos"
	*}
	*
	*@apiErrorExample {json} Error 403
	*{
	*	"exito": false,
	*	"status": 403,
	*	"error": "Forbidden",
	*	"detalles": "Este usuario ha sido desactivado"
	*}
	*
	*@apiErrorExample {json} Error 404
	*{
	*	"exito": false,
	*	"status": 404,
	*	"error": "NotFound",
	*	"detalles": "Usuario no encontrado"
	*}
	*
	*@apiErrorExample {json} Error 500
	*{
	*	"exito": false,
	*	"status": 500,
	*	"error": "InternalServerError",
	*	"detalles": "No se puede acceder a la base de datos"
	*}
	*/
    app.post('/login', function(req, res) {
    	controllerAuth.login({usuario: req.body.usuario, contrasena: req.body.contrasena}, function(data) {
    		res.status(data.status).json(data)
    	})
    })
}