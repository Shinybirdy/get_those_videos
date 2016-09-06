var express = require("express");
var app = express();
var path = require("path");
//var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended:false });

var videos = require('./routes/videos');

//------------------------------------------------
//npm module "serve-static" - effort to debug this:"angular.min.js.map:2 Uncaught SyntaxError: Unexpected token :". Dumb.
//app.use(serveStatic('server/public/ftp', {'index': ['default.html', 'default.htm']}));
// app.listen(3000)
//------------------------------------------------

//middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use('/videos', videos);


//start server
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){

  console.log("Mama is listening on port ", app.get('port'));
});

//Handle index file separately

app.get("/", function(req, res){

  res.sendFile(path.join(__dirname, "./public/views/index.html"));

});
