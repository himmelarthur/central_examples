"use strict"

BaseController = require('central/client/controller.coffee')
IndexView = require('./views/index')
LoginView = require('./views/login')


class Controller extends BaseController

    index: (params) ->
        @renderView(IndexView)

    login: (params) ->
        @renderView(LoginView)

module.exports = Controller
