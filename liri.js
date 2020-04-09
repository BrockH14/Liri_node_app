require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");



var spotify = new Spotify(keys.spotify);

var input1 = process.argv[2];
var input2 = process.argv.slice(3).join(" ");


switch (input1){
    case "concert-this":
        concertIt(input2)
        break;
    case "spotify-this-song":
        spotIt(input2)
        break;
    case "movie-this":
        movieIt(input2)
        break;
    case "do-what-it-says":
        doWhat(input2)
        break;
    default:
    break;
}
function concertIt(artist){
    artist = input2
    axios
    .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response) {
    console.log("Venue name:", response.data[0].venue.name);
    console.log("Venue location:", response.data[0].venue.city);
    var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
    console.log("Date of the Event:", eventDate);

  })
  .catch(function(error) {
    if (error.response) {
        console.log(error.response.data);console.log(error.response.status);console.log(error.response.headers);} 
        else if (error.request) {console.log(error.request);} else {console.log("Error", error.message);}
        console.log(error.config);
  });
}

function spotIt(song){ 
    song = input2
    if (song === ""){
        song = "The Sign"
    }
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    //Artist(s)
    console.log("Artists: ", data.tracks.items[0].album.artists[0].name);
    //Song name 
    console.log("Song Name: ", data.tracks.items[0].name);
    //Preview link
    console.log("Preview Link: ", data.tracks.items[0].preview_url);
    //The album
    console.log("Album Name: ", data.tracks.items[0].album.name);
});
};

function movieIt(movie){
    movie = input2
    axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=426a948b?t=" + movie)
    .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });


}
function doWhat(){
    input2 = 
    spot()

}