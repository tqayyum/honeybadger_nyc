/*# Pixels

### Step 1

Inside the `window.onload` function, create 15 x 15 = 225 divs inside the `#container` div,
each with a class of `pixel`. Give each pixel an id of the format `row-col`. For example,
the id of the first div should be `0-0`, then going rowwise, `0-1`, `0-2`, etc. until `0-14`.
After that, `1-0`, `1-1`, `1-2`, `1-3`, `1-4`...

### Step 2

Write a function called `colorPixel(row, col, color)`, where `row` and `col` are numbers,
and `color` is a string. The function should find the div in the specified row and column,
and change its background color to `color`.

### Step 3

Use your `colorPixel` function in your browser console to paint a picture!

### Bonus

Write your own custom functions to color your pixels in cool patterns with a single command!
*/


// The window.onload function runs when the document is loaded
window.onload = function() {
  console.log("Loaded, bro.");
  createGrid()

	function createGrid() {
		const 	grid = document.getElementById('container');
		const 	cols = 15;
		const 	rows = 15;

		for (var i = 0; i < cols; i++) {
			for (var j = 0; j < rows; j++) {
		const 	newDiv = document.createElement('div');
				newDiv.classList.add('squares');
				newDiv.classList.add ('pixel');			
				grid.appendChild(newDiv);
			}
		}
	}

	function redBlue() {
		createGrid()
		
	}


};