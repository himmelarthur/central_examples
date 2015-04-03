'use strict';

var central = require('central'),
    routes = require('./app/routes'),
    Controller = require('./app/controller'),
    server = central.createServer({
        port: 3031
    });

server.configure({
    routes: routes,
    staticFolder: __dirname + '/public',
    controller: new Controller(),
    rootEl: '.content'
});
// server.start();

var express = require('express');

var app = express();

app.use(server.expressApp);
app.get('/something', function (req, res) {
    res.send('ok');
});
app.listen(3030);
