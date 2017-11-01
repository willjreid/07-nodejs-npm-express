'use strict';

// DONE: Initialize your project using NPM to create and populate  package.json and package-lock.json files. Don't forget to add node_modules to your .gitignore!

// DONE: Require the ExpressJS package that you installed via NPM, and instantiate the app.
// Remember to install ExpressJS, and be sure that it's been added to your package.json as a dependency.
// There is also a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use().
const app = express();
app.use(express.static('./public'));
// COMMENTED: Why are our files in a "public" directory now? How does ExpressJS serve files?
// Files are available in a public directory so that they can be accessed on any client.  The public folder houses the data content we will need to serve our 250+ articles. ExpressJS serves assets directly from the root directory which we have defined as public.  This keeps non-public data segregate from the user.

// DONE: Refactor to use arrow function

app.post('/articles', bodyParser, (req, res) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(req.body);
  res.send('Record posted to server!!');
})

// app.get('/*', function(req, res) {
//   console.log('404 error')
//   alert('This page does not exist');
// })
// DONE: Write a new route, using an arrow function, that will handle a request and send the new.html file back to the user

app.get('/new', (req, res) => {res.sendFile('new.html', {root: './public'});});

app.listen(PORT, () => {
  // DONE: Refactor this to arrow function, log to the console a message that lets you know which port your server has started on
  console.log(`Listening on ${PORT}`);
});
