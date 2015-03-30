var central = require('central'),
    express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./app/routes'),
    Controller = require('./app/controller.coffee'),
    server = central.createServer({
        port: 3030
    });

server.configure({
    routes: routes,
    staticFolder: __dirname + '/public',
    controller: new Controller(),
    rootEl: '.content'
});
server.start();

var app = express();

mongoose.connect('mongodb://localhost/test-central');

var Cat = mongoose.model('Cat', {
    name: String
});

app.get('/api/:limit', function (req, res) {
    var limit = req.params.limit || 100;
    Cat.find({}, function (err, docs) {
        res.json(docs);
    }).limit(limit);
});

app.listen(3031);
