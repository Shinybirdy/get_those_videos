var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/search-api/:search', function (req, res) {

  var req = 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/search?search=' + req.params.search;

  request(req, function(err, response, videos) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(videos);

  });

});

router.get('/get-videos/:id', function (req, res) {

  var req = 'https://proofapi.herokuapp.com/videos/' + req.params.id;

  request(req, function(err, response, game) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(videos);

  });

});



router.post('/votes', function(req, res) {
GEThttps://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/votes
video_id ef572226-7b56-401b-89fc-7aa8b3642f27
  var game = req.body;

  pg.connect(connectionString, function(error, client, done) {

    if (error) {
      res.sendStatus(500);
    }

    client.query( 'SELECT * FROM game_ids WHERE game_ids.api_id = $1' , [game.apiID],
                  function(err, result) {

                    if (err) {
                      res.sendStatus(500);
                    }

                    if (result.rows.length == 0) {

                      client.query( 'INSERT INTO game_ids (api_id, location)' +
                                    ' values($1, $2)',
                                    [game.apiID, game.dbstored],
                                    function(err, result) {

                                      if (err) {
                                        res.sendStatus(500);
                                      }

                                      client.query( 'INSERT INTO dash_collection (api_id, categories, description, designers, image,    is_lent,'
                                                    + ' maxplayers, maxplaytime, minplayers, minplaytime, '
                                                    + 'gamename, suggested_age, thumbnail, yearpublished, publishers)' +
                                                    ' values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 ,$15)',
                                                    [game.apiID, game.categories, game.description, game.designers, game.image, game.isLent, game.maxPlayers,
                                                    game.maxPlaytime, game.minPlayers, game.minPlaytime,
                                                    game.name, game.suggestedAge, game.thumbnail,
                                                    game.yearPublished, game.publishers],
                                                    function(err, result) {
                                                      done();

                                                      if (err) {
                                                        res.sendStatus(500);
                                                      }

                                                      res.sendStatus(201);

                                                    });

                                    }

                                  );
                    } else {
                      res.send(result.rows);
                    }


                  });

  });

});


request({
  method: 'GET',
  url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

//  {
//   "email": "traceyzavadil@gmail.com",
//   "password": "patesiate,igneous,Eryops"
// }
// });

// router.get('get-videos/:id', function (req, res) {
//
//   var req = "http://..." + req.params.id;
//
//   request(req, function(err, response, video){
//
//     if(err){
//       res.sendStatus(500);
//       return;
//     }
//
//     res.send(video);
//
//   });
//
// });

// router.post('/votes', function(req, res){
//
//   var video = req.body;
//
//
// });
module.exports = router;
