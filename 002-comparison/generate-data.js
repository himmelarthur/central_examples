var mongoose = require('mongoose'),
    fs = require('fs');

mongoose.connect('mongodb://localhost/test-central');

var Cat = mongoose.model('Cat');

var words = fs.readFileSync('/usr/share/dict/words', 'utf-8').split('\n');

var i = 0;

function saveCat() {
    if (i == 10000) {
        return true;
    }
    var cat = new Cat({name: words[i]});
    cat.save(function () {
        console.log('meow');
        i++;
        saveCat();
    })
}

saveCat();
