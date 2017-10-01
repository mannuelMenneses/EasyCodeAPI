controllerNoticia = require('../controllers/controllerNoticia');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{get} /noticia Nueva noticia
	*@apiName Nueva noticia
	*@apiGroup Noticias
	*@apiVersion 1.0.0
	*@apiDescription Registra una nueva noticia
	*
	*@apiParam (header) {String} token Token único de usuario
	*@apiParam (body) {String} titulo Titulo de la noticia
	*@apiParam (body) {Text} contenido Contenido de la noticia
	*@apiParam (body) {String} imagen Direccion url de la imagen de la noticia (opcional)
	*
	*@apiSuccess {Boolean} exito Muestra estado de la accion
	*
	*@apiSuccessExample {json} Ejemplo
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
    app.post('/noticia', function(req, res) {
    	controllerNoticia.nuevaNoticia(req, res);
    });
}