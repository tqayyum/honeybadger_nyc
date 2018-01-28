const express = require('express');
const logger = require('morgan');
const app = express();

app.use	(express.static
		(path.join
		(__dirname, 
		('pubic'))));

app.get('/index.html', function(req, res) {
	res.sendFile(_dirname + '/' + 'index.html');
	console.log(_dirname + '/' + 'index.html');
});

app.get('/', function(req, res) {
	res.send('This is the home page.');
});

app.get('/process', function(req, res) {
	//Prepare output in JSON format
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

app.listen(8080, function() {
	console.log('Are you listening to port 8080');
});