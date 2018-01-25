const express = require('express');
const logger = require('morgan');
const request = require('request-promise');
const { clientId: client_id, clientSecret: client_secret }= require('./api_key');
const app = express();

app.use(logger('dev'));

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(`${client_id}:${client_secret}`).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

function getAccessToken() {
	return request(authOptions).then(function(data) {
		return data.access_token;
	})
}

app.get('/', function(req, res) {
	request(authOptions).then(function(data) {
		res.send(data);
	})
});

app.get('/:artist_name', function(req, res) {
	const artist = req.param.artist;
	getAccessToken.then(function(access_token) {
		var option = {
			url: 'https://api.spotify.com/v1/search',
			qs: {
				q: artist,
				tpye: 'artist'
			},
			headers {
				'Authorization': `Bearer ${access_token}`
			},
			json: true
		};

		return request(options).then(function(artistData) {
			return artistData;
		}).then(function (data) {
			res.send(data);
		})
});

app.listen(3000);