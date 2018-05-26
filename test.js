const testFolder = './posts/';
const fs = require('fs');

function getList() { 
    fs.readdir(testFolder, (err, files) => {
    let list = files.map(file => {
      return file;
    }); 
    console.log(list)
  })
}

getList()