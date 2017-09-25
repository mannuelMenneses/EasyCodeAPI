// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var puerto    =   process.env.PORT || 8080;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

// START THE SERVER
// ==============================================
app.listen(puerto, function(){
	console.log("La magia sucede en localhost: " + puerto);
});