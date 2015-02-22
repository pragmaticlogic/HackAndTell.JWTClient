var express = require('express'),
    app = express();

app.use(express.static('jwtIonic/www'));

var server = app.listen(8080, function() {
    console.log("Server listening on port ", server.address().port);
});