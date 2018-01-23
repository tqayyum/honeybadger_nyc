const express = require('express');
const logger = require('morgan');
const app = express();
const pokemon = require('./data/poke_array');

app.use(logger('dev'));

//Index route for the pokemon should send all the pokemon ro the user 
app.get('/pokemons', function(req, res) {
	res.send(pokemon);	
});

//Be able to search for a pokemon by name 
app.get('/pokemons/byName/:name', function (req, res) {
    const name = req.params.name;
    const result = pokemon.find(function(poke) {
    	return poke.name.toLowerCase() === name;
    })
    res.send(result);
    /*for(let i = 0; i < pokemon.length; i++) {
        if(pokemon[i].name.toLowerCase() === name) {
            res.send(pokemon[i]);
        }
    }*/
});

//Be able to search for a pokemon by id
app.get('/pokemons/byType/:id', function(req, res) {
	const type = req.params.type;
	const result = pokemon.filter(function(poke) {
		return poke.type.includes(type);
	})

	res.send(result);
});


//Be able to search for a pokemon by type


//Be able to get a random pokemon
app.get('/pokemons/random', function(req, res) {
	const index = Math.floor(Math.random() * pokemon.length);
	res.send(pokemon[index]);
});

app.listen(3000);