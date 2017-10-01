define({ "api": [
  {
    "type": "get",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Regresa token único para el usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario o correo electronico</p>"
          },
          {
            "group": "Parameter",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Success 200",
            "type": "Token",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "{\n\t\"exito\": true,\n\t\"token\": \"eyJ0eXAiOiJKV2QiLCJhbGciOiJIUzI1Niu9.eyJzdWIiOdJ1c3VhcmlvIiwiaWF0IjoxNTA2NTM4NFI5LCJleHAiOjE1MDc3UDgxMjl9.DX3nBM6_6iT55HwclaNddlUadfzsEgReeRm1OF-5NxE\"\n}",
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
          "title": "Error 404",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 404,\n\t\"error\": \"NotFound\",\n\t\"detalles\": \"Usuario no encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/estados",
    "title": "Estados",
    "name": "Estados",
    "group": "Lugares",
    "version": "1.0.0",
    "description": "<p>Regresa listado de estados</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Muestra array con resultados devuletos por la base de datos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resultados.id",
            "description": "<p>Identificador del estado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultados.nombre",
            "description": "<p>Nombre del estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "{\n\t\"exito\": true,\n\t\"resultados\": [\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"nombre\": \"Ciudad de México (CDMX)\"\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"nombre\": \"Jalisco (JAL)\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/lugares.js",
    "groupTitle": "Lugares"
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "resultados",
            "description": "<p>Muestra array con resultados devuletos por la base de datos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resultados.id",
            "description": "<p>Identificador del pais</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultados.nombre",
            "description": "<p>Nombre del pais</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "{\n\t\"exito\": true,\n\t\"resultados\": [\n\t\t{\n\t\t\t\"id\": 1,\n\t\t\t\"nombre\": \"México\"\n\t\t},\n\t\t{\n\t\t\t\"id\": 2,\n\t\t\t\"nombre\": \"Estados Unidos de América\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/lugares.js",
    "groupTitle": "Lugares"
  },
  {
    "type": "get",
    "url": "/noticia",
    "title": "Nueva noticia",
    "name": "Nueva_noticia",
    "group": "Noticias",
    "version": "1.0.0",
    "description": "<p>Registra una nueva noticia</p>",
    "parameter": {
      "fields": {
        "header": [
          {
            "group": "header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token único de usuario</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Titulo de la noticia</p>"
          },
          {
            "group": "body",
            "type": "Text",
            "optional": false,
            "field": "contenido",
            "description": "<p>Contenido de la noticia</p>"
          },
          {
            "group": "body",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la accion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
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
  }
] });
