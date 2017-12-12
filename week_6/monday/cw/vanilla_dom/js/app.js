window.onload = function(){

	const title = document.getElementById('page-title');
	let newTitle = document.createElement('h1');
		newTitle.classList.add('page-title');
		title.classList.add ('red')

	const list = document.getElementById('awesome-list');
	let newLi = document.createElement('li');
		newLi.classList.add('awesome-list');
		newLi.innerHTML = 'This the fourth Li';
		list.appendChild(newLi);

	const image = document.getElementById('image-container');
		image.remove();
		document.body.appendChild(image);

	const description = document.getElementById('description');
	description.classList.add ('green')


	const footer = document.createElement('footer');
		footer.innerHTML = 'This the fourth Li';
		footer.classList.add('red')
		footer.appendChild(footer);

}