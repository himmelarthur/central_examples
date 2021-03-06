var requireJade = require('require-jade'),
    central = require('central'),
    routes = require('./app/routes');

if (require.main === module) {
    var server = central.createServer();
    server.configure({
        routes: routes,
        staticFolder: __dirname + '/public'
    });
    server.start();
}
