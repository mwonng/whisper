var fs = require('fs');

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

var data = {};
const testFolder = './posts/';
fs.readdir(testFolder, (err, filenames) => {
  filenames.forEach(filename => {
    fs.readFile(testFolder + filename, 'utf-8', function(err, content) {
      if (err) {
        onError(err);
        return;
      }
      data[filename] = content;
      console.log(data);
    });
  });
})
