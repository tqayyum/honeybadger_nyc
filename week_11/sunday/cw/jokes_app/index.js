// CREATE A NEW APPLICATION INSIDE A JOKES_APP FOLDER
// CREATE A PACKAGE JSON
// INSTALL EXPRESS // MORGAN
// HAVE THE APP LISTEN ON PORT 3000
// YOU SHOULD HAVE THE FOLLOWING ROUTES

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/', function(req, res) {
	res.send('Hello');
});

// '/about' should give a brief description about the application
app.get('/about', function(req, res) {
	res.send(`This is an app for jokes`);
});

// '/bananas' should give a joke about bananas
app.get('/bananas', function(req, res) {
	res.send(`Q: Why do bananas wear suntan lotion? 
			A: Because they peel!`);
});

// '/joke' should return a random joke (out of 3 jokes)
app.get('/joke', function(req, res) {
    const jokes = ['JOKE 1', 'JOKE 2', 'JOKE 3'];
    const index = Math.floor(Math.random * Math.floor(2))
    res.send(jokes[index]);
});

// '/joke/:name' should return a personalized joke
app.get('/joke/:name', function(req, res) {
	const joke = req.params.name;
	res.send(`Q: Why do bananas wear suntan lotion? 
			A: Because they peel! ${joke}`);
});

app.listen(3000);