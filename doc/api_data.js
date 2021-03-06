define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Regresa token único para el usuario y el tipo de usuario que es (1 = Administrador / 2 = Empleado)</p>",
    "parameter": {
      "fields": {
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario o correo electronico</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "contrasena",
            "description": "<p>Contraseña de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Exito",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de exito</p>"
          },
          {
            "group": "Exito",
            "type": "Token",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de usuario</p>"
          },
          {
            "group": "Exito",
            "type": "Number",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo de usuario (1 = Administrador / 2 = Empleado)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 200",
          "content": "{\n\t\"exito\": true,\n\t\"status\": 200,\n\t\"token\": \"eyJ0eXAiOiJKV2QiLCJhbGciOiJIUzI1Niu9.eyJzdWIiOdJ1c3VhcmlvIiwiaWF0IjoxNTA2NTM4NFI5LCJleHAiOjE1MDc3UDgxMjl9.DX3nBM6_6iT55HwclaNddlUadfzsEgReeRm1OF-5NxE\"\n\t\"tipo\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"BadRequest\",\n\t\"detalles\": \"Los parametros usuario y/o contrasena estan incompletos\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"Este usuario ha sido desactivado\"\n}",
          "type": "json"
        },
        {
          "title": "Error 404",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 404,\n\t\"error\": \"NotFound\",\n\t\"detalles\": \"Usuario no encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"No se puede acceder a la base de datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/avisos/:numero",
    "title": "Avisos",
    "name": "Avisos",
    "group": "Avisos",
    "version": "1.0.0",
    "description": "<p>Listado de avisos</p>",
    "parameter": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de usuario</p>"
          }
        ],
        "Get": [
          {
            "group": "Get",
            "type": "String",
            "optional": false,
            "field": "numero",
            "description": "<p>Cantidad de avisos recibidos (Si no se recibe este argumento, por defecto es 5)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Exito",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Muestra array con resultados devuletos por la base de datos</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.titulo",
            "description": "<p>Titulo del aviso</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.contenido",
            "description": "<p>Texto del aviso</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.fecha",
            "description": "<p>Fecha de publicacion</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.empleado",
            "description": "<p>Nombre de quien publico el aviso</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.archivo",
            "description": "<p>Link de ubicacion del archivo del aviso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 200",
          "content": "{\n\t\"exito\": true,\n\t\"resultados\": [\n\t\t{\n\t\t\t\"titulo\": \"Lorem ipsum\",\n\t\t\t\"contenido\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu sollicitudin ligula, vel condimentum turpis. Proin non orci vulputate, lacinia dui interdum, rhoncus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus erat diam, consectetur vitae purus in, scelerisque scelerisque orci. Suspendisse ac imperdiet erat. Donec nec bibendum eros, vitae posuere nulla. Integer elementum ipsum non diam semper, sed elementum justo blandit. Phasellus at lectus nec tellus dictum fermentum. Sed eu turpis quis neque ornare iaculis nec et augue. Nullam eget erat pharetra enim tempus vehicula quis ac magna. Nunc turpis justo, aliquet a felis at, lobortis ultricies orci. Sed posuere vel lectus id commodo. Nulla sit amet vulputate nulla.\",\n\t\t\t\"fecha\": \"2017-10-01\",\n\t\t\t\"empleado\": \"Germán Perez Hernández\",\n\t\t\t\"archivo\": null\n\t\t},\n\t\t{\n\t\t\t\"titulo\": \"Vivamus lacinia magna quis est pharetra\",\n\t\t\t\"contenido\": \"Vivamus lacinia magna quis est pharetra, a commodo ex fermentum. Integer eget ullamcorper nisi. Etiam vel malesuada odio, non elementum metus. In hac habitasse platea dictumst. Nam tempus dolor erat, pulvinar convallis mauris lacinia ac. Nullam ut metus dolor. In at dui sit amet nisi tincidunt euismod at a metus. Duis volutpat, nibh sit amet malesuada consectetur, est tortor consectetur lectus, sit amet gravida arcu lacus at erat. Nam euismod pellentesque suscipit. Proin at turpis et felis efficitur placerat. Proin tempus, libero a cursus molestie, arcu mi lacinia quam, et imperdiet nunc dolor in diam. Ut sed lobortis leo. Curabitur tristique et arcu quis aliquam. Nulla sollicitudin enim non orci fringilla, sit amet hendrerit eros sodales. Etiam sit amet tortor aliquam, tincidunt erat laoreet, aliquam sapien. Fusce porta condimentum tellus et volutpat.\",\n\t\t\t\"fecha\": \"2017-09-11\",\n\t\t\t\"empleado\": \"Nancy Villalba Gómez\",\n\t\t\t\"archivo\": null\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"BadRequest\",\n\t\"detalles\": \"No se recibio token\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"No se tiene permiso para hacer esta accion\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"No se puede acceder a la base de datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/aviso.js",
    "groupTitle": "Avisos"
  },
  {
    "type": "post",
    "url": "/aviso",
    "title": "Nuevo aviso",
    "name": "Nuevo_aviso",
    "group": "Avisos",
    "version": "1.0.0",
    "description": "<p>Registra un nuevo aviso</p>",
    "parameter": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de usuario</p>"
          }
        ],
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Titulo de la noticia</p>"
          },
          {
            "group": "Post",
            "type": "Text",
            "optional": false,
            "field": "contenido",
            "description": "<p>Contenido de la noticia</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "nivel",
            "description": "<p>Nivel de empleado que puede ver el aviso</p>"
          },
          {
            "group": "Post",
            "type": "Number",
            "optional": false,
            "field": "archivo",
            "description": "<p>Identificador de archivo (opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la accion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 201",
          "content": "{\n\t\"exito\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"SolicitudIncorrecta\",\n\t\"detalles\": \"Los parametros estan incompletos o son incorrectos\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"No se tiene permiso para hacer esta accion\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"Error el insertar datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/aviso.js",
    "groupTitle": "Avisos"
  },
  {
    "type": "post",
    "url": "/cliente",
    "title": "Nuevo cliente",
    "name": "Nuevo_cliente",
    "group": "Cliente",
    "version": "1.0.0",
    "description": "<p>Registra un nuevo cliente</p>",
    "parameter": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de administrador que va a hacer la acción</p>"
          }
        ],
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del cliente</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos del cliente</p>"
          },
          {
            "group": "Post",
            "type": "Number",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo del cliente (1 = Persona moral / 2 = Persona fisica)</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del cliente</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono del cliente (Opcional)</p>"
          },
          {
            "group": "Post",
            "type": "Number",
            "optional": false,
            "field": "provincia",
            "description": "<p>Identificador de provincia (Opcional)</p>"
          },
          {
            "group": "Post",
            "type": "Text",
            "optional": false,
            "field": "direccion",
            "description": "<p>Dirección del cliente (Opcional)</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "cp",
            "description": "<p>Código Postal del cliente (Opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la accion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 201",
          "content": "{\n\t\"exito\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"SolicitudIncorrecta\",\n\t\"detalles\": \"Los parametros estan incompletos\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"No se tiene permiso para hacer esta accion\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"Error el insertar datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cliente.js",
    "groupTitle": "Cliente"
  },
  {
    "type": "post",
    "url": "/empleado",
    "title": "Nuevo empleado",
    "name": "Nuevo_empleado",
    "group": "Empleado",
    "version": "1.0.0",
    "description": "<p>Registra un nuevo empleado</p>",
    "parameter": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de administrador que va a hacer la acción</p>"
          }
        ],
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Nombre único de usuario para el sistema (Opcional)</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "contrasena",
            "description": "<p>Contraseña de usuario</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del empleado</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos del empleado</p>"
          },
          {
            "group": "Post",
            "type": "Number",
            "optional": false,
            "field": "puesto",
            "description": "<p>Puesto del empleado (1 = Administrador / 2 = Empleado)</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono del empleado (Opcional)</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Correo del empleado</p>"
          },
          {
            "group": "Post",
            "type": "Number",
            "optional": false,
            "field": "provincia",
            "description": "<p>Identificador de provincia (Opcional)</p>"
          },
          {
            "group": "Post",
            "type": "Date",
            "optional": false,
            "field": "fdn",
            "description": "<p>Fecha de nacimiento del empleado (Opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la accion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 201",
          "content": "{\n\t\"exito\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"SolicitudIncorrecta\",\n\t\"detalles\": \"Los parametros estan incompletos\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"No se tiene permiso para hacer esta accion\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"Error el insertar datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/empleado.js",
    "groupTitle": "Empleado"
  },
  {
    "type": "get",
    "url": "/paises",
    "title": "Paises",
    "name": "Paises",
    "group": "Lugares",
    "version": "1.0.0",
    "description": "<p>Regresa listado de paises</p>",
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Exito",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Muestra array con resultados devuletos por la base de datos</p>"
          },
          {
            "group": "Exito",
            "type": "Number",
            "optional": false,
            "field": "resultados.id",
            "description": "<p>Identificador del pais</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.nombre",
            "description": "<p>Nombre del pais</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 200",
          "content": "{\n\t\"exito\": true,\n\t\"resultados\": [\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"nombre\": \"México\"\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"nombre\": \"Estados Unidos de America\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"No se puede acceder a la base de datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/lugares.js",
    "groupTitle": "Lugares"
  },
  {
    "type": "post",
    "url": "/provincia",
    "title": "Provincias",
    "name": "Provincias",
    "group": "Lugares",
    "version": "1.0.0",
    "description": "<p>Regresa listado de estados</p>",
    "parameter": {
      "fields": {
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "pais",
            "description": "<p>Identificador de pais</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Exito",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Muestra array con resultados devuletos por la base de datos</p>"
          },
          {
            "group": "Exito",
            "type": "Number",
            "optional": false,
            "field": "resultados.id",
            "description": "<p>Identificador del estado</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.nombre",
            "description": "<p>Nombre del estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 200",
          "content": "{\n\t\"exito\": true,\n\t\"resultados\": [\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"nombre\": \"Ciudad de México\"\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"nombre\": \"Puebla\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"No se puede acceder a la base de datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/lugares.js",
    "groupTitle": "Lugares"
  },
  {
    "type": "post",
    "url": "/noticias/:numero",
    "title": "Noticias",
    "name": "Noticias",
    "group": "Noticias",
    "version": "1.0.0",
    "description": "<p>Listado de noticias</p>",
    "parameter": {
      "fields": {
        "Get": [
          {
            "group": "Get",
            "type": "String",
            "optional": false,
            "field": "numero",
            "description": "<p>Cantidad de noticias recibidas (Si no se recibe este argumento, por defecto es 5)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Exito",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Muestra array con resultados devuletos por la base de datos</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.titulo",
            "description": "<p>Titulo de noticia</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.contenido",
            "description": "<p>Texto de la noticia</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.fecha",
            "description": "<p>Fecha de publicacion</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.empleado",
            "description": "<p>Nombre de quien publico la noticia</p>"
          },
          {
            "group": "Exito",
            "type": "String",
            "optional": false,
            "field": "resultados.imagen",
            "description": "<p>Link de ubicacion de imagen de la noticia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 200",
          "content": "{\n\t\"exito\": true,\n\t\"resultados\": [\n\t\t{\n\t\t\t\"titulo\": \"Lorem ipsum\",\n\t\t\t\"contenido\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu sollicitudin ligula, vel condimentum turpis. Proin non orci vulputate, lacinia dui interdum, rhoncus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus erat diam, consectetur vitae purus in, scelerisque scelerisque orci. Suspendisse ac imperdiet erat. Donec nec bibendum eros, vitae posuere nulla. Integer elementum ipsum non diam semper, sed elementum justo blandit. Phasellus at lectus nec tellus dictum fermentum. Sed eu turpis quis neque ornare iaculis nec et augue. Nullam eget erat pharetra enim tempus vehicula quis ac magna. Nunc turpis justo, aliquet a felis at, lobortis ultricies orci. Sed posuere vel lectus id commodo. Nulla sit amet vulputate nulla.\",\n\t\t\t\"fecha\": \"2017-10-01\",\n\t\t\t\"empleado\": \"Germán Perez Hernández\",\n\t\t\t\"imagen\": null\n\t\t},\n\t\t{\n\t\t\t\"titulo\": \"Vivamus lacinia magna quis est pharetra\",\n\t\t\t\"contenido\": \"Vivamus lacinia magna quis est pharetra, a commodo ex fermentum. Integer eget ullamcorper nisi. Etiam vel malesuada odio, non elementum metus. In hac habitasse platea dictumst. Nam tempus dolor erat, pulvinar convallis mauris lacinia ac. Nullam ut metus dolor. In at dui sit amet nisi tincidunt euismod at a metus. Duis volutpat, nibh sit amet malesuada consectetur, est tortor consectetur lectus, sit amet gravida arcu lacus at erat. Nam euismod pellentesque suscipit. Proin at turpis et felis efficitur placerat. Proin tempus, libero a cursus molestie, arcu mi lacinia quam, et imperdiet nunc dolor in diam. Ut sed lobortis leo. Curabitur tristique et arcu quis aliquam. Nulla sollicitudin enim non orci fringilla, sit amet hendrerit eros sodales. Etiam sit amet tortor aliquam, tincidunt erat laoreet, aliquam sapien. Fusce porta condimentum tellus et volutpat.\",\n\t\t\t\"fecha\": \"2017-09-11\",\n\t\t\t\"empleado\": \"Mario López Mora\",\n\t\t\t\"imagen\": null\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"No se puede acceder a la base de datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/noticia.js",
    "groupTitle": "Noticias"
  },
  {
    "type": "post",
    "url": "/noticia",
    "title": "Nueva noticia",
    "name": "Nueva_noticia",
    "group": "Noticias",
    "version": "1.0.0",
    "description": "<p>Registra una nueva noticia</p>",
    "parameter": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de usuario</p>"
          }
        ],
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Titulo de la noticia</p>"
          },
          {
            "group": "Post",
            "type": "Text",
            "optional": false,
            "field": "contenido",
            "description": "<p>Contenido de la noticia</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "imagen",
            "description": "<p>Direccion url de la imagen de la noticia (opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la accion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 201",
          "content": "{\n\t\"exito\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"SolicitudIncorrecta\",\n\t\"detalles\": \"Los parametros estan incompletos\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"No se tiene permiso para hacer esta accion\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"Error el insertar datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/noticia.js",
    "groupTitle": "Noticias"
  },
  {
    "type": "post",
    "url": "/seguimiento",
    "title": "Nuevo seguimiento",
    "name": "Nuevo_seguimiento",
    "group": "Seguimientos",
    "version": "1.0.0",
    "description": "<p>Registra un nuevo seguimiento</p>",
    "parameter": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de empleado</p>"
          }
        ],
        "Post": [
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "cliente",
            "description": "<p>Código de cliente</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "asunto",
            "description": "<p>Asunto del seguimiento</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "fecha",
            "description": "<p>Fecha de programación (formato YYYY-MM-DD)</p>"
          },
          {
            "group": "Post",
            "type": "String",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del seguimiento</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Exito": [
          {
            "group": "Exito",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la accion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exito 201",
          "content": "{\n\t\"exito\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Código de error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 400,\n\t\"error\": \"SolicitudIncorrecta\",\n\t\"detalles\": \"Los parametros estan incompletos\"\n}",
          "type": "json"
        },
        {
          "title": "Error 403",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 403,\n\t\"error\": \"Forbidden\",\n\t\"detalles\": \"No se tiene permiso para hacer esta accion\"\n}",
          "type": "json"
        },
        {
          "title": "Error 500",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 500,\n\t\"error\": \"InternalServerError\",\n\t\"detalles\": \"Error el insertar datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/seguimiento.js",
    "groupTitle": "Seguimientos"
  }
] });
