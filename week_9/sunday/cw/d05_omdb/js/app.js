console.log('Did it load');
console.log($);

$(function() {

		const result = $.ajax({
			url: 'http://www.omdbapi.com/',
			data: {
				t: 'batman',
				apikey: '938a2d8f'
			},
			
			dataType: 'json',
			method: 'GET'
		});

	result.then(function(data) {
		console.log(data);
	})
})

