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
		var sql = "SELECT `usuario`, `tipo` FROM `empleado` WHERE (`usuario` = " + connection.escape(credenciales.usuario) + " OR `nickname` = " + connection.escape(credenciales.usuario) + ") AND `contrasena` = AES_ENCRYPT(" + connection.escape(credenciales.contrasena) + ", 'guayaba')";
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

// Lugares
// ==============================================

//Estados
modelMysql.getEstados = function(callback)
{
	if (connection)
	{
		var sql = "SELECT * FROM `estado` order by `nombre`";
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

//Paises
modelMysql.getPaises = function(callback)
{
	if (connection)
	{
		var sql = "SELECT * FROM `pais` order by `nombre`";
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

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = modelMysql;