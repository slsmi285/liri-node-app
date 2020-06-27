# LIRI-BOT

## LIRI-NODE-APP

LIRI is like iPhone's SIRI.  However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _language_Interpretation and Recognition Interface.  LIRI will be a command line node app that takes in parameters and gives you back data.  LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### OVERVIEW:

In this project we focused on using Node.js in the command line and taking parameters (process.argv) to call a function and display output to the console.

When running Node with following strings, Node takes the strings as an array, with spaces as the separator.
   1. The first item in the array is the Node.exe path
   2. Second item is the current directory
   3. The LIRI app takes the third item of the array for the command, while the rest are used as arguments for API calls.

### SOFTWARE USED:

**NODE.JS - a JavaScript runtime built on Chrome's V8 JavaScript engine.

**Axios**

    1. Installation: node install axios
    2. Used for grabbing data from:
    3. OMDB API
    4. Bands In Town API
    
**Node-Spotify-API**

    1. Installation: npm install node-spotify-api
    
**Spotify module**

    1."This is a universal wrapper/client for the Spotify Web API that runs on Node.js and the browser, using browserify/webpack/rollup."
    
**Moment**

    1. Moment.js module is used for formatting time.
    2. Installation: npm install moment
    
**Dotenv**

    1. A zero-dependency module for loading environment variables from .env into process.env.
    2. Installation: npm install dotenv
    
**FS module**

    1. "The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions."
    2. Installation: npm install fs.
    3. var fs = require("fs").
    
**Request**

    1. "The request module is for making HTTP requests, it is really a wrapper around Node's built in http module."
    
**Require module**

    1. "This is a builtin for Node, require function is the easiest way to include modules that exist in separate files.  Functionality of require is that it reads a Javascript        file, executes the file, and then proceeds to return the exports object."
    2. Installation: npm install require

**Inquirer**

    1. "Inquirer eases the process of asking end user questions, parsing, validating answers, managing hierarchical prompts and providing error feedback."
    
**Bands In Town -Events module**

    1. "This is a wrapper to use Bands in Town api, returns a random song/album/artist."

**The "getMyInfo" object**

The getMyInfo object contains multiple methods for the LIRI app to determine which command was entered and then calls that specific method to obtain and display specific information.

    1. processArgs method
    2. gets an array from [process.argv](https://nodejs.org/api/process.html#process_process_argv), which is a "property that returns an array containing the command line              arguments passed when the Node.js process was launched."
    3. checkCommand method
        - Uses the switch/case statement checks if the command argument matches an existing method and calls that method.
    4. concertThis method
    5. spotifyThis method
    6. movieThis method
    7. doWhatItSays method
    8. addToFile method

**LIRI is run in the command line.**

   *node liri.js concert-this <artist/band name here> runs the concertThis method along with the name of the artist or band as an argument.* 
   
       - It getsinfo from the Bands In Town API using Axios and displays multiple show events.
       - If no argument (Artist or Band) is entered, it will search using "George Strait" as a default value.
       - Save command and argument to addToFile method.
           Screenshot:
           ![Concert-This Screenshot]("https://github.com/github/slsmi285/blob/assets/Concert-this.PNG") 

                                  
   *node liri.js spotify-this-song <song name here> runs the spotifyThis method.*

       - If a song is entered, it will send it as a query to the Spotify API and returns the artist's name, song name, preview link, and album.
       - If no argument is given, "The Chair" will be used as a default argument.
       - Save command and argument to addToFile method.
           Screenshot:
           ![Spotify-This-Song Screenshot](https://github.com/slsmi285/liri-node-app/issues/3#issue-646561550)
                   
   *node liri.js movie-this <movie name here> runs the movieThis method using Axios and OMDB API.*

       - If a movie is entered, it returns the movie title, year, IMDB Rating, RT rating, country, language, plot, and actors.
       - If no movie is entered, a default value of "Mr Nobody" is used.
       - Save command and argument to addToFile method.
           Screenshot:
           ![Movie-This Screenshot](https://github.com/slsmi285/liri-node-app/issues/2#issue-646560424)
           
   *node liri.js do-what-it-says runs the doWhatItSays method using the FS module to get a string from the random.txt file.*

       - The "," in the string will be used as a delimiter using `.split(",") and saves the string as two items in an array.
       - The first item is used as the command and the second item is the query argument.
       - The command and query argument are passed to the checkCommand method which then calls the appropriate method.
       - Save command and argument to addToFile method.
           Screenshot:
           ![Do-What-It-Says](https://github.com/slsmi285/liri-node-app/issues/4#issue-646561871)
           ![Do-What-It-Says_movie-this](https://github.com/slsmi285/liri-node-app/issues/5#issue-646562249)
           ![Do-What-It-Says_concert-this](https://github.com/slsmi285/liri-node-app/issues/6#issue-646562454)

   *The addToFile method uses the FS module to append a string to the log.txt file.*

       - Moment.js is used to get the current time and format it as [MM/DD/YYYY].
       - Here's the heading of each appended string:
            - [MM/DD/YYY] <command-name> <argument>
       - log.txt
           Screenshot:
           ![Log.txt](https://user-images.githubusercontent.com/61988746/85908947-6b12a800-b7e5-11ea-84c8-9bebe3d3d399.PNG)
        
        
