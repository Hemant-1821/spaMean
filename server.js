var express = require('express');
var expobj = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var db = require('./backendconfiguration/db');

var port = process.env.PORT || 8080;

expobj.use(bodyParser.json());
expobj.use(bodyParser.json({type:'application/vnd.api+json'}));
expobj.use(bodyParser.urlencoded({extended: true}));
expobj.use(methodOverride('X-HTTP-Method-Override'));
expobj.use(express.static(__dirname+'/public'));

require('./backendapp/routes')(expobj);

expobj.listen(port);

console.log("Node Server has been started");
console.log('\n To check  it open in any web browser and type "localhost:'+port+'"');

exports = module.exports = expobj;
