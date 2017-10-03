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

//Tipo de uausrio
modelMysql.getTipoUsuario = function(credenciales, callback)
{
	if (connection)
	{
		var sql = "SELECT `id`, `puesto`, `status` FROM `empleado` WHERE (`correo` = " + connection.escape(credenciales.usuario) + " OR `nickname` = " + connection.escape(credenciales.usuario) + ") AND `contrasena` = AES_ENCRYPT(" + connection.escape(credenciales.contrasena) + ", 'guayaba')";
		connection.query(sql, function(error, row)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

// Avisos
// ==============================================

//Avisos
modelMysql.getAvisos = function(nivel, numero, callback)
{
	if (connection)
	{
		var sql = 'SELECT `aviso`.`titulo`, `aviso`.`contenido`, `aviso`.`fecha`, CONCAT(`empleado`.`nombre`, " ", `empleado`.`apellidos`) AS empleado, `archivo`.`ubicacion` AS archivo FROM aviso INNER JOIN empleado ON aviso.empleado = empleado.id LEFT JOIN archivo ON aviso.archivo = archivo.id WHERE `aviso`.`nivel` >= ' + connection.escape(nivel) + ' ORDER BY `aviso`.`fecha` DESC LIMIT 0, ' + connection.escape(numero);
		connection.query(sql, function(error, row)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

//Nuevo aviso
modelMysql.setAviso = function(aviso, callback)
{
	if (connection)
	{
		var sql = 'INSERT INTO `aviso`(`titulo`, `contenido`, `fecha`, `empleado`, `nivel`, `archivo`) VALUES (?, ?, ?, ?, ?, ?)';
		connection.query(sql, aviso, function(error, result)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
	}
}

// Lugares
// ==============================================

//Provincias
modelMysql.getProvincia = function(pais, callback)
{
	if (connection)
	{
		var sql = 'SELECT `id`, `nombre` FROM `provincia` WHERE `pais` = ?';
		connection.query(sql, pais, function(error, row)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

//Paises
modelMysql.getPaises = function(callback)
{
	if (connection)
	{
		var sql = 'SELECT * FROM `pais` ORDER BY `nombre`';
		connection.query(sql, function(error, row)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

// Noticias
// ==============================================

//Noticias
modelMysql.getNoticias = function(numero, callback)
{
	if (connection)
	{
		var sql = 'SELECT `noticia`.`titulo`, `noticia`.`contenido`, `noticia`.`fecha`, CONCAT(`empleado`.`nombre`, " ", `empleado`.`apellidos`) AS empleado, `noticia`.`imagen` FROM `noticia` INNER JOIN `empleado` ON `noticia`.`empleado` = `empleado`.`id` ORDER BY `noticia`.`fecha` DESC LIMIT 0, ' + connection.escape(numero);
		connection.query(sql, function(error, row)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

//Nueva noticia
modelMysql.setNoticia = function(noticia, callback)
{
	if (connection)
	{
		var sql = 'INSERT INTO `noticia`(`titulo`, `contenido`, `fecha`, `empleado`, `imagen`) VALUES (?, ?, ?, ?, ?)';
		connection.query(sql, noticia, function(error, result)
		{
			if(error)
			{
				throw error;
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
	}
}

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = modelMysql;