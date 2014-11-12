var serveStatic = require('serve-static');
var config = require('./config');

require('connect')().use(serveStatic(__dirname + '/' + config.dirname)).listen(config.port);
console.log('Server started on port '+ config.port);