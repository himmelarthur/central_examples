"use strict";

var BaseController = require('central/shared/controller.coffee'),
    IndexView = require('./views/index'),
    Page2View = require('./views/page2'),
    Articles = require('./collections/articles'),
    view = BaseController.view,
    viewWithCallback = BaseController.viewWithCallback;

var Controller = BaseController.extend({

    index: view(IndexView)(function (params) {
        var articles = new Articles([
            {name: 'Hello'},
            {name: 'First Central App'},
            {name: 'Looks great'},
            {name: 'Yay!'}
        ]);
        return {
            collection: articles
        }
    }),

    page2: viewWithCallback(Page2View)(function (params, callback) {
        var articles = new Articles();
        articles.fetch({
            success: function () {
                callback({
                    collection: articles
                });
            },
            error: function () {
                callback({
                    collection: articles
                });
            }
        })
    })

});

module.exports = Controller;
