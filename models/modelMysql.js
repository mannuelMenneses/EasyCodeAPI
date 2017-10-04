//Llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
	{ 
		host: 'localhost', 
		user: 'root',  
		password: '', 
		database: 'easycode'
	}
);

//creamos un objeto para ir almacenando todo lo que necesitemos
var modelMysql = {};

// Auth
// ==============================================

//Tipo de empleado
modelMysql.getTipoUsuario = function(credenciales, callback)
{
	var sql = "SELECT `id`, `puesto`, `status` FROM `empleado` WHERE (`correo` = " + connection.escape(credenciales.usuario) + " OR `nickname` = " + connection.escape(credenciales.usuario) + ") AND `contrasena` = AES_ENCRYPT(" + connection.escape(credenciales.contrasena) + ", 'guayaba')";
	connection.query(sql, function(error, row)
	{
		if(error)
		{
			callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
		}
		else
		{
			callback(null, row);
		}
	});
}

// Avisos
// ==============================================

//Avisos
modelMysql.getAvisos = function(nivel, numero, callback)
{
	var sql = 'SELECT `aviso`.`titulo`, `aviso`.`contenido`, `aviso`.`fecha`, CONCAT(`empleado`.`nombre`, " ", `empleado`.`apellidos`) AS empleado, `archivo`.`ubicacion` AS archivo FROM aviso INNER JOIN empleado ON aviso.empleado = empleado.id LEFT JOIN archivo ON aviso.archivo = archivo.id WHERE `aviso`.`nivel` >= ' + connection.escape(nivel) + ' ORDER BY `aviso`.`fecha` DESC LIMIT 0, ' + connection.escape(numero);
	connection.query(sql, function(error, row)
	{
		if(error)
		{
			callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
		}
		else
		{
			callback(null, row);
		}
	});
}

//Nuevo aviso
modelMysql.setAviso = function(aviso, callback)
{
	var sql = 'INSERT INTO `aviso`(`titulo`, `contenido`, `fecha`, `empleado`, `nivel`, `archivo`) VALUES (?, ?, ?, ?, ?, ?)';
	connection.query(sql, aviso, function(error, result)
	{
		if(error)
		{
			if (error.sqlMessage) {
				callback(null, error);
			}
			else {
				callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
			}
		}
		else
		{
			callback(null, 0);
		}
	});
}

// Clientes
// ==============================================

//Nuevo cliente
modelMysql.setCliente = function(cliente, callback)
{
	var sql = 'INSERT INTO `cliente`(`nombre`, `apellidos`, `tipo`, `correo`, `telefono`, `provincia`, `direccion`, `cp`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
	connection.query(sql, cliente, function(error, result)
	{
		if(error)
		{
			if (error.sqlMessage) {
				callback(null, error);
			}
			else {
				callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
			}
		}
		else
		{
			callback(null, 0);
		}
	});
}

// Empleados
// ==============================================

//Nuevo empleado
modelMysql.setEmpleado = function(empleado, callback)
{
	var sql = 'INSERT INTO `empleado`(`nickname`, `contrasena`, `nombre`, `apellidos`, `puesto`, `telefono`, `correo`, `provincia`, `fdn`, `status`) VALUES (?, AES_ENCRYPT(?, "guayaba"), ?, ?, ?, ?, ?, ?, ?, 1)';
	connection.query(sql, empleado, function(error, result)
	{
		if(error)
		{
			if (error.sqlMessage) {
				callback(null, error);
			}
			else {
				callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
			}
		}
		else
		{
			callback(null, 0);
		}
	});
}

// Lugares
// ==============================================

//Provincias
modelMysql.getProvincia = function(pais, callback)
{
	var sql = 'SELECT `id`, `nombre` FROM `provincia` WHERE `pais` = ?';
	connection.query(sql, pais, function(error, row)
	{
		if(error)
		{
			callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
		}
		else
		{
			callback(null, row);
		}
	})
}

//Paises
modelMysql.getPaises = function(callback)
{
	var sql = 'SELECT * FROM `pais` ORDER BY `nombre`';
	connection.query(sql, function(error, row)
	{
		if(error)
		{
			callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
		}
		else
		{
			callback(null, row);
		}
	});
}

// Noticias
// ==============================================

//Noticias
modelMysql.getNoticias = function(numero, callback)
{
	var sql = 'SELECT `noticia`.`titulo`, `noticia`.`contenido`, `noticia`.`fecha`, CONCAT(`empleado`.`nombre`, " ", `empleado`.`apellidos`) AS empleado, `noticia`.`imagen` FROM `noticia` INNER JOIN `empleado` ON `noticia`.`empleado` = `empleado`.`id` ORDER BY `noticia`.`fecha` DESC LIMIT 0, ' + connection.escape(numero);
	connection.query(sql, function(error, row)
	{
		if(error)
		{
			callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
		}
		else
		{
			callback(null, row);
		}
	});
}

//Nueva noticia
modelMysql.setNoticia = function(noticia, callback)
{
	var sql = 'INSERT INTO `noticia`(`titulo`, `contenido`, `fecha`, `empleado`, `imagen`) VALUES (?, ?, ?, ?, ?)';
	connection.query(sql, noticia, function(error, result)
	{
		if(error)
		{
			if (error.sqlMessage) {
				callback(null, error);
			}
			else {
				callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
			}
		}
		else
		{
			callback(null, 0);
		}
	});
}

// Seguimientos
// ==============================================

//Nuevo seguimiento
modelMysql.setSeguimiento = function(seguimiento, callback)
{
	var sql = 'INSERT INTO `seguimiento`(`cliente`, `asunto`, `fecha`, `descripcion`, `empleado`) VALUES (?, ?, ?, ?, ?)';
	connection.query(sql, seguimiento, function(error, result)
	{
		if(error)
		{
			if (error.sqlMessage) {
				callback(null, error);
			}
			else {
				callback(null, {sqlMessage: "No se puede acceder a la base de datos"});
			}
		}
		else
		{
			callback(null, 0);
		}
	});
}

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = modelMysql;