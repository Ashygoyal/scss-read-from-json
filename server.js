var express = require('express');
var app = express();
var path = require("path");

var port = 3000;

app.use('/cssFiles', express.static(__dirname + '/css'));
app.use('/jsFiles', express.static(__dirname + '/js'));
app.use('/imgFiles', express.static(__dirname + '/img'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on 3000`)
})
