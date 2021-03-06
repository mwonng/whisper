var fs = require('fs');
var fm = require('front-matter');

module.exports = {
  generator: function(){
    const testFolder = './posts/';
    fs.readdir(testFolder, (err, filenames) => {
      var data = filenames.map(filename => {
        content = fs.readFileSync(testFolder + filename, 'utf-8',);
        return {...fm(content), filename};
      });
      data.sort((a,b) => { return b.attributes.num -a.attributes.num; })
      // console.log(data);
      fileContent = `export default ${JSON.stringify(data)}`
      fs.writeFileSync('tmp/summary.js', fileContent, 'utf-8');
    })
  },
  sortData: function(){
  }
}