controllerSeguimiento = require('../controllers/controllerSeguimiento');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{post} /seguimiento Nuevo seguimiento
	*@apiName Nuevo seguimiento
	*@apiGroup Seguimientos
	*@apiVersion 1.0.0
	*@apiDescription Registra un nuevo seguimiento
	*
	*@apiParam (Header) {String} token Token único de empleado
	*@apiParam (Post) {String} cliente Código de cliente
	*@apiParam (Post) {String} asunto Asunto del seguimiento
	*@apiParam (Post) {String} fecha Fecha de programación (formato YYYY-MM-DD)
	*@apiParam (Post) {String} descripcion Descripción del seguimiento
	*
	*@apiSuccess (Exito) {Boolean} exito Muestra estado de la accion
	*
	*@apiSuccessExample {json} Exito 201
	*{
	*	"exito": true
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
	*	"error": "SolicitudIncorrecta",
	*	"detalles": "Los parametros estan incompletos"
	*}
	*
	*@apiErrorExample {json} Error 403
	*{
	*	"exito": false,
	*	"status": 403,
	*	"error": "Forbidden",
	*	"detalles": "No se tiene permiso para hacer esta accion"
	*}
	*
	*@apiErrorExample {json} Error 500
	*{
	*	"exito": false,
	*	"status": 500,
	*	"error": "InternalServerError",
	*	"detalles": "Error el insertar datos"
	*}
	*/
    app.post('/seguimiento', function(req, res) {
    	controllerSeguimiento.nuevoSeguimiento(req, res);
    });
}