var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

routes.configure(app);
var server = app.listen(3333, function () {
    console.log('Server listening on port ' + server.address().port);
});
