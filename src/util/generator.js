var fs = require('fs');
var fm = require('front-matter');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

// var data = {};
// readFiles('./posts/', function(filename, content) {
//   data[filename] = content;
// }, function(err) {
//   throw err;
// });

var metaResult = {}
const testFolder = './posts/';
fs.readdir(testFolder, (err, filenames) => {
  var data = filenames.map(filename => {
    content = fs.readFileSync(testFolder + filename, 'utf-8',);
    return fm(content);
  });
  data.sort((a,b) => { return b.attributes.num -a.attributes.num; })
  console.log(data);
})