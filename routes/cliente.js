controllerCliente = require('../controllers/controllerCliente');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{post} /cliente Nuevo cliente
	*@apiName Nuevo cliente
	*@apiGroup Cliente
	*@apiVersion 1.0.0
	*@apiDescription Registra un nuevo cliente
	*
	*@apiParam (Header) {String} token Token único de administrador que va a hacer la acción
	*@apiParam (Post) {String} nombre Nombre del cliente
	*@apiParam (Post) {String} apellidos Apellidos del cliente
	*@apiParam (Post) {Number} tipo Tipo del cliente (1 = Persona moral / 2 = Persona fisica)
	*@apiParam (Post) {String} correo Correo del cliente
	*@apiParam (Post) {String} telefono Telefono del cliente (Opcional)
	*@apiParam (Post) {Number} provincia Identificador de provincia (Opcional)
	*@apiParam (Post) {Text} direccion Dirección del cliente (Opcional)
	*@apiParam (Post) {String} cp Código Postal del cliente (Opcional)
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
    app.post('/cliente', function(req, res) {
    	controllerCliente.nuevoCliente(req, res);
    });
}