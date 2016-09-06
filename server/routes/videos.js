

var express = require('express');
var router = express.Router();
var request = require('request');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

//authentication
xhr.open('POST', 'https://proofapi.herokuapp.com/sessions');
console.log("in videos.js");
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'email': 'traceyzavadil@gmail.com',
  'password': 'patesiate,igneous,Eryops'
};

xhr.send(JSON.stringify(body));


//VIDEO
// id         :string   ef572226-7b56-401b-89fc-7aa8b3642f27
// title      :string   Human-readable title of the Video "The Mountain"
// url        :string   The full URI path to the location of the Video http://vimeo.com/22439234
// slug       :string   Machine-readble version of the Video title the-mountain
// view_tally :number   Number of times the Video has been viewed 2
// vote_tally :number   Sum of the Video's vote-ups and vote-downs 1
// created    :string   Created timestamp in ISO 8601 format 2014-04-14T02:15:15Z
// updated    :string   Updated timestamp in ISO 8601 format  2014-04-14T02:15:15Z



//get a video GET https://proofapi.herokuapp.com/videos/video_id
function getVideos(){
xhr.open('GET', 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27', true);

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    document.getElementById("demo").innerHTML = this.responseText;
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();
}
//upddate PATCH https://proofapi.herokuapp.com/videos/video_id
xhr.open('PATCH', 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27', true);

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {


  if (this.readyState === 4) {

    console.log('UpdateStatus:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'title': 'The Highest Mountain',
  'slug': 'the-highest-mountain'
};


// delete a video DELETE https://proofapi.herokuapp.com/videos/video_id

xhr.open('DELETE', 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

// get videos views GET https://proofapi.herokuapp.com/videos/video_id/views
xhr.open('GET', 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/views');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

// get video votes GET https://proofapi.herokuapp.com/videos/video_id/votes

xhr.open('GET', 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/votes');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

//create video vote POST https://proofapi.herokuapp.com/videos/video_id/votes

var request = new XMLHttpRequest();

xhr.open('POST', 'https://proofapi.herokuapp.com/videos/ef572226-7b56-401b-89fc-7aa8b3642f27/votes');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'opinion': 1
};

xhr.send(JSON.stringify(body));

// list all videos GET https://proofapi.herokuapp.com/videos?page&per_page

xhr.open('GET', 'https://proofapi.herokuapp.com/videos?page&per_page');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();


//create a new video POST https://proofapi.herokuapp.com/videos

xhr.open('POST', 'https://proofapi.herokuapp.com/videos');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'title': 'The Highest Mountain',
  'url': 'http://vimeo.com/22439234',
  'slug': 'the-highest-mountain'
};

xhr.send(JSON.stringify(body));

//VIEWS------------------------------------------------------------------------
//get a view GET https://proofapi.herokuapp.com/views/view_id
xhr.open('GET', 'https://proofapi.herokuapp.com/views/7e88d5c8-5350-4050-ad89-42f1ee7128a5');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

//delete a view DELETE https://proofapi.herokuapp.com/views/view_id
xhr.open('DELETE', 'https://proofapi.herokuapp.com/views/7e88d5c8-5350-4050-ad89-42f1ee7128a5');

xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

// list all views GET https://proofapi.herokuapp.com/views?page&per_page

xhr.open('GET', 'https://proofapi.herokuapp.com/views?page&per_page');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

// create a new view POST https://proofapi.herokuapp.com/views
xhr.open('POST', 'https://proofapi.herokuapp.com/views');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

//VOTES-------------------------------------------------------------------------
// get a vote GET https://proofapi.herokuapp.com/votes/vote_id
xhr.open('GET', 'https://proofapi.herokuapp.com/votes/0c7fe478-46b6-4c93-87b4-0bc3e1b59cda');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

//delete a vote DELETE https://proofapi.herokuapp.com/votes/vote_id
xhr.open('DELETE', 'https://proofapi.herokuapp.com/votes/0c7fe478-46b6-4c93-87b4-0bc3e1b59cda');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();
//VOTES COLLECTION -------------------------------------------------------------
//list all votes GET https://proofapi.herokuapp.com/votes?page&per_page
xhr.open('GET', 'https://proofapi.herokuapp.com/votes?page&per_page');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

//create a new vote POST https://proofapi.herokuapp.com/votes
xhr.open('POST', 'https://proofapi.herokuapp.com/votes');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', 'eFuXWvwaHAFYxb7SbkwhrDu4');
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

xhr.send();

module.exports = router;
