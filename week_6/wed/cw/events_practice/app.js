console.log('loaded');

window.onload = function() {

const newH1 = document.querySelector('#ramdom-div');
const tacosElem = document.getElementById('tacos');

	newH1.addEventListener('click', function() {
		document.body.style.backgroundColor = 'red';
	});

	tacosElem.addEventListener('dbclick', function() {
		document.body.style.backgroundColor = 'blue';
	});
}