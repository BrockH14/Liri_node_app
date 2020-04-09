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
        song = "The Sign";
    }else {}
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {return console.log('Error occurred: ' + err);}
    console.log("Artists: ", data.tracks.items[0].album.artists[0].name);
    console.log("Song Name: ", data.tracks.items[0].name);
    console.log("Preview Link: ", data.tracks.items[0].preview_url);
    console.log("Album Name: ", data.tracks.items[0].album.name);
});
};

function movieIt(movie){
    movie = input2
    if (movie === ""){
        movie = "Mr. Nobody";
    }
    if(movie === "Mr. Nobody"){
        console.log("-----------------------");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
      }
    axios
    .get("http://www.omdbapi.com/?t=" + movie + "&apikey=426a948b&plot=short&tomatoes=true")
    .then(function(response) {
        console.log("Title of the movie: ", response.data.Title);
        console.log("Year the movie came out: ", response.data.Year);
        console.log("IMDB Rating: ", response.data.imdbRating);
        console.log("Rotten Tomatoes Rating of the movie: ", response.data.tomatoRating);
        console.log("Country where the movie was produced: ", response.data.Country);
        console.log("Language: ", response.data.Language);
        console.log("Plot: ", response.data.Plot);
        console.log("Actors: ", response.data.Actors);
    })
    .catch(function(error) {
        if (error.response) {
            console.log(error.response.data);console.log(error.response.status);console.log(error.response.headers);} 
            else if (error.request) {console.log(error.request);} else {console.log("Error", error.message);}
            console.log(error.config);
  });
}
function doWhat(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {return console.log(error);}
        var dataArr = data.split(",");
        console.log(dataArr)
        if (dataArr[0] === "concert-this"){
            concertIt(dataArr[1])
        }
        if (dataArr[2] === "spotify-this-song"){
            spotIt(dataArr[3])
        }
        if (dataArr[4] === "movie-this"){
            movieIt(dataArr[5])
        }
});
};