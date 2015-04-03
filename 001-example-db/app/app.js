"use strict";

var path = require('path'),
    $ = require('jquery'),
    requireJade = require('require-jade'),
    BaseApplication = require('central/client/app.coffee'),
    Controller = require('./controller.js');

var Application = window.Application = BaseApplication.extend({

    templatesPath: path.join(__dirname) + 'templates/',

    controller: new Controller()

});
