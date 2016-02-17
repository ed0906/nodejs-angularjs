var express = require('express');
var app = express();

// ----------------------- Server Configuration -----------------------------------

// Set App name as an environment variable
process.title = "appname";

// Get Environment variable or hard coded port
var port = (process.env.PORT || 8305);
app.set('port', port);

// Homepage
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
});

// Static files
app.use(express.static(__dirname));

app.listen(app.get('port'), function () {
    console.log('Application is running on http://localhost:' + port);
});