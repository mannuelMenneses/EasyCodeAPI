controllerNoticia = require('../controllers/controllerNoticia');
bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

    /**
	*@api{post} /noticia Nueva noticia
	*@apiName Nueva noticia
	*@apiGroup Noticias
	*@apiVersion 1.0.0
	*@apiDescription Registra una nueva noticia
	*
	*@apiParam (Header) {String} token Token único de usuario
	*@apiParam (Post) {String} titulo Titulo de la noticia
	*@apiParam (Post) {Text} contenido Contenido de la noticia
	*@apiParam (Post) {String} imagen Direccion url de la imagen de la noticia (opcional)
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
    app.post('/noticia', function(req, res) {
    	controllerNoticia.nuevaNoticia(req, res);
    });

    /**
	*@api{post} /noticias/:numero Noticias
	*@apiName Noticias
	*@apiGroup Noticias
	*@apiVersion 1.0.0
	*@apiDescription Listado de noticias
	*
	*@apiParam (Get) {String} numero Cantidad de noticias recibidas (Si no se recibe este argumento, por defecto es 5)
	*
	*@apiSuccess (Exito) {Boolean} exito Muestra estado de la consulta
	*@apiSuccess (Exito) {Object[]} resultados Muestra array con resultados devuletos por la base de datos
	*@apiSuccess (Exito) {String} resultados.titulo Titulo de noticia
	*@apiSuccess (Exito) {String} resultados.contenido Texto de la noticia
	*@apiSuccess (Exito) {String} resultados.fecha Fecha de publicacion
	*@apiSuccess (Exito) {String} resultados.empleado Nombre de quien publico la noticia
	*@apiSuccess (Exito) {String} resultados.imagen Link de ubicacion de imagen de la noticia
	*
	*@apiSuccessExample {json} Exito 200
	*{
	*	"exito": true,
	*	"resultados": [
	*		{
	*			"titulo": "Lorem ipsum",
	*			"contenido": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu sollicitudin ligula, vel condimentum turpis. Proin non orci vulputate, lacinia dui interdum, rhoncus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus erat diam, consectetur vitae purus in, scelerisque scelerisque orci. Suspendisse ac imperdiet erat. Donec nec bibendum eros, vitae posuere nulla. Integer elementum ipsum non diam semper, sed elementum justo blandit. Phasellus at lectus nec tellus dictum fermentum. Sed eu turpis quis neque ornare iaculis nec et augue. Nullam eget erat pharetra enim tempus vehicula quis ac magna. Nunc turpis justo, aliquet a felis at, lobortis ultricies orci. Sed posuere vel lectus id commodo. Nulla sit amet vulputate nulla.",
	*			"fecha": "2017-10-01",
	*			"empleado": "Germán Perez Hernández",
	*			"imagen": null
	*		},
	*		{
	*			"titulo": "Vivamus lacinia magna quis est pharetra",
	*			"contenido": "Vivamus lacinia magna quis est pharetra, a commodo ex fermentum. Integer eget ullamcorper nisi. Etiam vel malesuada odio, non elementum metus. In hac habitasse platea dictumst. Nam tempus dolor erat, pulvinar convallis mauris lacinia ac. Nullam ut metus dolor. In at dui sit amet nisi tincidunt euismod at a metus. Duis volutpat, nibh sit amet malesuada consectetur, est tortor consectetur lectus, sit amet gravida arcu lacus at erat. Nam euismod pellentesque suscipit. Proin at turpis et felis efficitur placerat. Proin tempus, libero a cursus molestie, arcu mi lacinia quam, et imperdiet nunc dolor in diam. Ut sed lobortis leo. Curabitur tristique et arcu quis aliquam. Nulla sollicitudin enim non orci fringilla, sit amet hendrerit eros sodales. Etiam sit amet tortor aliquam, tincidunt erat laoreet, aliquam sapien. Fusce porta condimentum tellus et volutpat.",
	*			"fecha": "2017-09-11",
	*			"empleado": "Mario López Mora",
	*			"imagen": null
	*		}
	*	]
	*}
	*/
    app.post('/noticias', function(req, res) {
    	controllerNoticia.noticias(req, res);
    });

    app.post('/noticias/:numero', function(req, res) {
    	controllerNoticia.noticias(req, res);
    });
}