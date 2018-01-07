
$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('keypress', function(event) {
		if (event.keyCode === 13) { search(); }
	});

	$('#search-box').on('click', '#random', getRandomGif);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);
});

// Performs an AJAX request to the giphy api
// endpoint: http://api.giphy.com/v1/gifs/random
// api_key: dc6zaTOxFJmzC&
// Request will return an object with a single gif and metadata
function getRandomGif() {
	console.log('are you loaded');
	const results = $.ajax({
		url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
	})

	results.then(function(data) {
		renderResults([data.data]);
	})
		};

// Kitten Bomb
// AND
// Puppy Bomb
// Performs an AJAX request to the giphy api
// should ask for 10 gifs
// should render and display them using the gifTemplate
function kittenBomb() {
	const results = $.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=kittens&limit=10&api_key=dc6zaTOxFJmzC',
	})

	results.then(function(data) {
		renderResults([data.data]);
	})
		};
}
function puppyBomb() {const results = $.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=puppy&limit=10&api_key=dc6zaTOxFJmzC',
	})

	results.then(function(data) {
		renderResults([data.data]);
	})
		};


// Performs an AJAX request to the giphy api
// with user supplied search params
function search() {
	const results = $.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=kittens&limit=10&api_key=dc6zaTOxFJmzC',
	})

	results.then(function(data) {
		renderResults([data.data]);
	})
		};

};

// Should render and display the results
// returned from the AJAX request to giphy
function renderResults(results) {
	console.log('hi');
	const $gifContainer = $('#gif-container');
	$gifContainer.empty();

	
	results.forEach(function(result){
		const image = result.imageorginal_url || result.images.orginal.url;
		const markup = `
			<div class='gif'>
			<img src="${image}" alt=''>
			</div>
		`;
		
	})
}

