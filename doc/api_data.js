define({ "api": [
  {
    "type": "get",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Regresa token unico para el usuario [INCOMPLETO]</p>",
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
            "description": "<p>Falta por implementar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "{\n\t\"exito\": true,\n\t\"token\": \"Aun no implementado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Boolean",
            "optional": false,
            "field": "exito",
            "description": "<p>Muestra estado de la consulta</p>"
          },
          {
            "group": "Error 404",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Codigo de error</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Nombre del error</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "detalles",
            "description": "<p>Muestra detalles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "{\n\t\"exito\": false,\n\t\"status\": 404,\n\t\"error\": \"ParametrosIncompletos\",\n\t\"detalles\": \"Los parametros usuario y/o contrasena estan incompletos\"\n}",
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
  }
] });
