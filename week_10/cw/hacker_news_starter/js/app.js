console.log('Did it load');
console.log($);

$(function() {

		// Top stories api for Hacker News
		const topNewsURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
		const newNewsURL = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
		const bestStoriesURL = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty'; 

		const result = $.ajax({
			
			url: topNewsURL, newNewsURL, bestStoriesURL,
			data: {
				id: 16117380
			},
			
			dataType: 'json',
			method: 'GET'
		});

	result.then(function(data) {
		console.log(data);
	})
})