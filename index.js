var fs = require('fs');

function readFileSync(path) {
    var data = fs.readFileSync(path, {encoding: 'utf8'});
    return data;
}
console.log('Hello World!');
console.log(readFileSync('text.txt'));