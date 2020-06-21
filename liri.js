
require("dotenv").config();

//require npm packages
var keys = require("./keys.js");
var inquirer = require("inquirer");
var axios = require("axios");
var fs = require("fs");


var spotify = new spotify(keys.spotify);


fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);
  var dataArr = data.split(",");
  for(i = 0; i < dataArr.length;i++){
    console.log(dataArr[i]);
}

//make the following commands and what each command should do:

//concert-this <artist/band name here>
//this will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
//using https as written above with codingbootcamp for api key -- no need to get BIT api key
//Name of the venue
//Venue location
//Date of the Event (use moment to format this is as "MM/DD/YY")
//do-what-it-says

//spotify-this-song <song name here>
//this will show the following information about the song in the terminal/bash window
//Artist(s)
//The song's name
//A preview link of the song from Spotify
//The album tha the song is from
//If no song is provided then the program will default to "The Sign" by Ace of Base.

// spotify api key
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "5ea5620290d8433c8e35d23389b4ebb2",
  secret: "327ef2d2eee84920a7222219407f2860"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

/* OR spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    //console.log(response);
  })
  .catch(function(err) {
   // console.log(err);
  });*/

  /* OR spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
   // console.log(data); 
  })
  .catch(function(err) {
   // console.error('Error occurred: ' + err); 
  });*/

  //Spotify code from the developer web api
  /* Load the HTTP library 
  var http = require("http");

  /* Create an HTTP server to handle responses */

 /*</your> http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);*/

  //movie-this <movie name here>
  //this will output the following information to the terminal/bash window.
  //Title of the movie
  //Year the movie came out.
  //IMDB Rating of the movie.
  //Rotten Tomatoes Rating of the movie.
  //Country where the movie was produced.
  //Language of the movie.
  //Plot of the movie.
  //Actors of the movie.

  //If the user doesnt type a movie in, the program will output data for the movie "Mr. Nobody."
  //Will use the axios package to retrieve data from the OMDB API. use trilogy for the api

  //do-what-it-says
  //using fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRIs commands: it should run "spotify-this-song" for "I Want it That Way"
  //change up the text in random.txt to test out the feature for movie-this and concert-this (?????)