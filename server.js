// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var puerto  = process.env.PORT || 8080;

// ROUTES
// ==============================================

require('./routes/lugares')(app);
require('./routes/auth')(app);

// START THE SERVER
// ==============================================
app.listen(puerto, function(){
	console.log("La magia sucede en localhost: " + puerto);
});