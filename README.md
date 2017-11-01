
# Project Name: node.js npm express

**Author**: Matt Iwicki and Will Reid
**Version**: 1.0.7 -- the version with node.js npm express

## Overview
Our goal with this project was to build on a mobile-first site, using jQuery to dynamically render blog posts sorted by most recent publication date and allow dynamic filtering in response to user preference for particular authors or categories.  We installed node.js and now serve more than 250 articles to the DOM using an express server call.


## Getting Started
To build this app on your own machine, clone this repo and launch the html page in your browser.


## Architecture
We are using a SMACSS organization of our CSS. The index.html file reveals the basic template for each article; the hackerIpsum.json file holds all the initial text content; the article.js file constructs each article and makes the posting available to the DOM; and the articleView.js file allows the user to interact with the elements on-screen.  The server.js file allows the server to provide content.


## Change Log
11-01-2017 10:00am -- organized the server.js file
11-01-2017 11:00am -- linked the new.html page with sendFile command, corrected CSS links
11-01-2017 12:00pm -- adjusted location of server.js file to allow server connection to happen at all



## Credits and Collaborations
Ron Dunphy and Scott McCoy were invaluable in troubleshooting the proper server.js location.
