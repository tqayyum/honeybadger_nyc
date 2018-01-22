const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/', function(req, res) {
    res.send('Hello');
});

app.listen(3000);

app.get('/sayHello', function(req, res) {
	const name = req.query.name;
	res.send(`Hello ${name}`);
});