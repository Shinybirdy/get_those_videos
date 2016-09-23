//--REQUIRE NODE MODULES--------------------------//
var express = require("express");
var app = express();
var path = require("path");

/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
//var passport = require('./auth/passport');
//var configs = require('./config/auth');
var index = require('./routes/index');
var auth = require('./routes/auth');
var isLoggedIn = require('./utils/auth');
var private = require('./routes/private/index');
var database = require('./utils/database');

/** ---------- EXPRESS APP CONFIG ---------- **/
var app = express();
app.use('/public', express.static('public'));  // serve files from public
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended:false });
/** ---------- DATABASE CONNECTION HANDLING ---------- **/
// database();
//middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var serveStatic = require('serve-static');

/** ---------- SESSION CREATION AND STORAGE ---------- **/
/**
 * Creates session that will be stored in memory.
 * @todo Before deploying to production,
 * configure session store to save to DB instead of memory (default).
 * @see {@link https://www.npmjs.com/package/express-session}
 */


 // app.use(session({
 //   secret: configs.sessionVars.secret,
 //   key: 'user',
 //   resave: 'true',
 //   saveUninitialized: false,
 //   cookie: { maxage: 60000, secure: false },
 // }));
 // /** ---------- PASSPORT ---------- **/
 // app.use(passport.initialize()); // kickstart passport
 // /**
 //  * Alters request object to include user object.
 //  * @see {@link auth/passport}
 //  */
 // app.use(passport.session());
 // /** ---------- ROUTES ---------- **/
 app.use('/auth', auth);
 app.use('/private', isLoggedIn, private);
 app.use('/', index);
 // /** ---------- SERVER START ---------- **/
 // app.listen(3000, function () {
 //   console.log('Now running on port ', 3000);
 // });
 //
 //



 /////my old stuff - not antoinettes
var router = express.Router();

var videos = require('./routes/videos');
//var signIn = require("./routes/signIn");
//------------------------------------------------
//npm module "serve-static" - effort to debug this:"angular.min.js.map:2 Uncaught SyntaxError: Unexpected token :". Dumb.
//app.use(serveStatic('server/public/ftp', {'index': ['default.html', 'default.htm']}));
// app.listen(3000)
//------------------------------------------------




//start server
app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){

  console.log("Mama is listening on port ", app.get('port'));
});

//Handle index file separately

app.get("/", function(req, res){

  res.sendFile(path.join(__dirname, "./public/views/index.html"));

});
//routes
 app.use('/videos', videos);
 //app.use('/signIn', signIn);
