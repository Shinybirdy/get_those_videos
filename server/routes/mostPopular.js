var express = require('express');
var router = express.Router();
var request = require('request');

//upddate
request({
  method: 'PATCH',
  url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
  },
  body: "{  \"title\": \"The Highest Mountain\",  \"slug\": \"the-highest-mountain\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

//get views
// get https://proofapi.herokuapp.com/videos/video_id/views
var request = require('request');

request({
  method: 'GET',
  url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/views',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

//delete
var request = require('request');

request({
  method: 'DELETE',
  url: 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': 'eFuXWvwaHAFYxb7SbkwhrDu4'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
module.exports = router;
