define({ "api": [
  {
    "type": "get",
    "url": "/estado/get",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del estado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "[\n\t{\n\t\t\"id\": 1,\n\t\t\"nombre\": \"Ciudad de México (CDMX)\"\n\t},\n\t{\n\t\t\"id\": 2,\n\t\t\"nombre\": \"Jalisco (JAL)\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/lugares.js",
    "groupTitle": "Lugares"
  },
  {
    "type": "get",
    "url": "/pais/get",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del pais</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del pais</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo",
          "content": "[\n\t{\n\t\t\"id\": 1,\n\t\t\"nombre\": \"México\"\n\t},\n\t{\n\t\t\"id\": 2,\n\t\t\"nombre\": \"Estados Unidos de America\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/lugares.js",
    "groupTitle": "Lugares"
  }
] });
