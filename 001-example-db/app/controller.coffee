"use strict"

BaseController = require('central/shared/controller.coffee')
IndexView = require('./views/index')
Page2View = require('./views/page2')
Articles = require('./collections/articles')


class Controller extends BaseController

    index: @::view(IndexView) (params, callback) ->
        articles = new Articles([
            {name: 'Hello'}
            {name: 'First Central App'}
            {name: 'Looks great'}
            {name: 'Yay!'}
        ])
        collection: articles

    page2: @::viewWithCallback(Page2View) (params, callback) ->
        articles = new Articles()
        articles.fetch
            success: ->
                callback collection: articles
            error: ->
                callback collection: articles

module.exports = Controller
