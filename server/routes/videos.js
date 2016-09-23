//server side business

var express = require('express');
var router = express.Router();
var request = require('request');
var path = require("path");
var token;

//user sign in----------------------------------------------------------------------------------

  request({
  method: 'POST',
  url: 'https://proofapi.herokuapp.com/sessions',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"email\": \"traceyzavadil@gmail.com\",  \"password\": \"patesiate,igneous,Eryops\"}"
  }, function (error, response, body) {
    var authResponse = JSON.parse(body);
    token = authResponse.data.attributes.auth_token;

    fetchAllVideos();

    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    console.log(token);
    console.log("this works");

      if (authResponse.hasOwnProperty( 'errors')) {
        res.send(body);
      } else {
      console.log(token);
      }
    });

  //VIDEOS COLLECTION - get all videos -----------------------------------------
  var fetchAllVideos = function(){
    request({
  method: 'GET',
  url: 'https://proofapi.herokuapp.com/videos?page&per_page',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': token
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  console.log("this totally works!!!!!");
});
};







module.exports = router;
