// CREATE A CALCULATOR IN A NEW FOLDER CALLED CALC_EXPRESS
// INSTALL EXPRESS AND MORGAN

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

// THE APP SHOULD HAVE THE FOLLOWING ROUTES
// '/add' WHICH WILL TAKE TWO QUERY PARAMS, ADD THEM TOGETHER, AND SEND THE RESULT TO THE USER
app.get('/add', function(req,res) {
	const val1 = parseInt(req.param.val1);
	const val2 = parseInt(req.param.val2);
	const result = (val1 + val2).toString;

	res.send( result);
});

// '/subtract' WHICH WILL TAKE TWO QUERY PARAMS, SUBTRACT THEM TOGETHER, AND SEND THE RESULT TO THE USER
app.get('/sub:val1/:val2', function(req,res) {
	
	res.send('Subtracting Numbers');
});

// '/divide' WHICH WILL TAKE TWO ROUTE PARAMS, DIVIDE THEM, AND SEND THE RESULT TO THE USER
app.get('/div', function(req,res) {
	res.send('Dividing Numbers');
});

// '/multiply' WHICH WILL TAKE TWO ROUTE PARAMS, MULTIPLY THEM TOGETHER, AND SEND THE RESULT TO THE USER
app.get('/mul', function(req,res) {
	res.send('Multipling Numbers');
});

app.listen(3000);