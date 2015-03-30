"use strict"

BaseController = require('central/shared/controller.coffee')
IndexView = require('./views/index')
Page2View = require('./views/page2')
Articles = require('./collections/articles')


class Controller extends BaseController

    index: @::view(IndexView) (params, callback) ->
        articles = new Articles([
            {name: 1}
            {name: 2}
            {name: 3}
            {name: 12}
        ])
        articles.fetch
            success: ->
                callback(collection: articles)
            error: ->
                callback(collection: articles)

    page2: @::view(Page2View) ->


module.exports = Controller
