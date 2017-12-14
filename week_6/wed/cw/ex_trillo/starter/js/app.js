
/** As a user, I want cards in the done column to disappear when I click the X, so I can keep my done column compact.
* As a user, I want cards in the to do column to move to the done column when I click finish, so I can keep track of my progress
* As a user, I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list*/

window.onload = function () {

	const  removeButton =  document.querySelectorAll('.delete');

	for (let i = 0; i < removeButton.length; i++) {
		addRemoveListener(removeButton[i]);

	}
	
	function addRemoveListener(node){
	node.addEventListener('click', function() {
		this.parentNode.remove();
	})
	}
}
