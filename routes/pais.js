model = require('../models/model');

module.exports = function(app){

    app.get('/estado/get', function(req, res){
        model.getEdos(function(error, data) {
        	res.status(200).json(data);
        });
    });
}