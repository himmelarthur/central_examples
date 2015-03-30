var BaseCollection = require('central/shared/base/collection');

var Articles = BaseCollection.extend({

    model: require('../model/article'),

    url: 'http://jsonplaceholder.typicode.com/comments',

});

module.exports = Articles;
