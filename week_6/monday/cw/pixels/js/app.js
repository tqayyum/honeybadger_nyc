// The window.onload function runs when the document is loaded
window.onload = function() {
  console.log("Loaded, bro.");
	
	const 	grid = document.getElementById('container');
	const 	newDiv = document.createElement('div');
			newDiv.classList.add('pixel')
			grid.appendChild(newDiv);
};
