$(function(){
	console.log('Loaded, bro');
	const vanillaAwesome = document.getElementById('awesome');
	const $aside = $('#awesome');

	const vanillaYay = document.getElementsByClassName('yay');
	const $yay = $('yay');

	const $googleLink = $('.google');
	$googleLink.text('GO TO GOOGLE');

	//const $linkHolder = $('.link-holder');
	//$linkHolder.HTML($googleLink);

	const $h1 = $('<h1>');
	$('.body').append($h1);
	//$h1.appendTo('body');

	$('.body').prepend($h1);
	//$h1.prependTo('body');

	$h1.remove();

	//$('.second').empty();

// TAKE THE UL WITH THE CLASS OF SECOND AND APPEND IT TO THE LINK HOLDER DIV
	//const $second = $('.second');
	//$('.second').append($link-holder);

// PREPEND THE LINK HOLDER DIV TO THE CONTAINER DIV
	//const $link-holder = $('.link-holder');
	//$('.container').prepend($link-holder);

// EMPTY THE SECTION WITH THE CLASS OF ASIDES AND APPEND ALL ASIDES THAT EXIST IN THE PAGE TO IT
	const $asideSection = $('.aside');
	const $allAside = $('aside');
	$asideSection.empty;
	$asideSection.html($allAside);

	const $circle = $('.circle');
	$circle.css('background-color', 'blue');

	$circle.addClass('wwww');
	$circle.removeClass('whatever');

	$circle.children();
	console.log($circle.children().find('aside'));

});