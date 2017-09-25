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
var model = {};

// Estados
// ==============================================

//Lista de estados
model.getEdos = function(callback)
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

//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = model;