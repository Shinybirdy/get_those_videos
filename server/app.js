var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

var mostLiked = require('./routes/mostLiked');
var mostPopular = require('./routes/mostPopular');
var newest = require('./routes/newest');

//middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//routes
app.use('/mostLiked', mostLiked);
app.use('/mostPopular', mostPopular);
app.use('/newest', newest);

//start server
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
  console.log("Mama is listening on port ", app.get('port'));
});

//Handle index file separately

app.get("/", function(req, res){

  res.sendFile(path.join(__dirname, "./public/views/index.html"));
});
