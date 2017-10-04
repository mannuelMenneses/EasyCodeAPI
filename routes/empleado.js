controllerEmpleado = require('../controllers/controllerEmpleado');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{post} /empleado Nuevo empleado
	*@apiName Nuevo empleado
	*@apiGroup Empleado
	*@apiVersion 1.0.0
	*@apiDescription Registra un nuevo empleado
	*
	*@apiParam (Header) {String} token Token único de administrador que va a hacer la acción
	*@apiParam (Post) {String} nickname Nombre único de usuario para el sistema (Opcional)
	*@apiParam (Post) {String} contrasena Contraseña de usuario
	*@apiParam (Post) {String} nombre Nombre del empleado
	*@apiParam (Post) {String} apellidos Apellidos del empleado
	*@apiParam (Post) {Number} puesto Puesto del empleado (1 = Administrador / 2 = Empleado)
	*@apiParam (Post) {String} telefono Telefono del empleado (Opcional)
	*@apiParam (Post) {String} correo Correo del empleado
	*@apiParam (Post) {Number} provincia Identificador de provincia (Opcional)
	*@apiParam (Post) {Date} fdn Fecha de nacimiento del empleado (Opcional)
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
    app.post('/empleado', function(req, res) {
    	controllerEmpleado.nuevoEmpleado(req, res);
    });
}