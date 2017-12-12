// The window.onload function runs when the document is loaded
window.onload = function() {
  console.log("Loaded, bro.");

	const gridc = document.getElementById('container');
	const newDiv = document.createElement('div');
			newDiv.classList.add('gridColumn');
			//newDiv.innerHTML = 'This the fourth Li';
			//gridc.appendChild(newDiv);
			newDiv.classList.add ('pixel');
};
