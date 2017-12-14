
/** As a user, I want cards in the done column to disappear when I click the X, so I can keep my done column compact.
* As a user, I want cards in the to do column to move to the done column when I click finish, so I can keep track of my progress
* As a user, I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list*/

window.onload = function () {

	const  removeButton =  document.querySelectorAll('.delete');
	const  finishButton =  document.querySelectorAll('.finish');
	const  addInput =  document.getElementById('new-card-text');

	for (let i = 0; i < removeButton.length; i++) {
		addRemoveListener(removeButton[i]);
	}
	for (var i = 0; i < finishButton.length; i++) {
		addFinishListener(finishButton[i]);
	}
	
	function addRemoveListener(node) {
		node.addEventListener('click', function() {
			this.parentNode.remove();
		});
	}

	function addFinishListener(node) {
		node.addEventListener('click', function() {
			const parentNode = this.parentNode;
			this.remove();
			parentNode.remove();
			parentNode.classList.remove('todo');
			parentNode.classList.add('done');
			document.querySelector('#done-column .card-list').appendChild(parentNode)
		});
	}

	function addInputListener(node) {
		node.addInput('click', function()
			const parentNode = this.parentNode;
			this.appendChild(todo);
			)
	}

}
