require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");



var spotify = new Spotify(keys.spotify);

var input1 = process.argv[2];
var input2 = process.argv.slice(3).join(" ");
function run(){

if (input1 === "concert-this"){
    artist = input2


    https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
}
function spot(){ 
if (input1 === "spotify-this-song"){
    song = input2


}
}
if (input1 === "movie-this"){
    movie = input2

}
if (input1 === "do-what-it-says"){
    input2 = 
    spot()

}
}
run()