# Liri_node_app

LIRI is similar to iPhone's SIRI. The major difference is that SIRI is a speach interpretation software that searches based on request, LIRI is a bot that will search using commands and return information about concerts, songs, and movies. 

## LIRI uses the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

## Technologies used:
* `Node.js`
* `Javascript`

## npm packages:
* `bands in town - a search API that focuses on finding concerts or shows.`
* `spotify - A simple to use API library for the Spotify REST API.`
* `omdb - API library that contains various infomation calls to movies.`
* `moment - `
* `dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.`

## How to Run LIRI-Bot

### Step One: node liri concert-this <artist/band name>.
the folowing information should be shown in the command line/bash:

  ```
  1. Name of venue
  2. Venue location
  3. Date of the event(using moment to format this into mm/dd/yyyy)
  ```

### Step Two: node liri spotify-this-song <song name here>.
the folowing information should be shown in the command line/bash:
  
  ```
  1. Artist(s)
  2. The song's name
  3. A preview link of the song from Spotify
  4. The album that the song is from
  ```

### Step Three: node liri.js movie-this <movie name here>.
the folowing information should be shown in the command line/bash:
  
  ```
  1. Title of the movie
  2. Year the movie came out
  3. IMDB Rating of the movie
  4. Country where the movie was produced
  5. Language of the movie
  6. Plot of the movie
  7. Actors in the movie
  8. Rotten Tomatoes Rating
  9. Rotten Tomatoes URL
  10. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'
  ```

### Step Four: node liri.js do-what-it-says

This will create a responce from random.txt

## Author
Brock Horton 

## Video Link 
https://youtu.be/2QbO5Bmctp8

