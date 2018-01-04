/** As a user, I want cards in the done column to disappear when I click the X, so I can keep my done column compact.
* As a user, I want cards in the to do column to move to the done column when I click finish, so I can keep track of my progress
* As a user, I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list*/

$(function() {
<<<<<<< HEAD
  console.log("Hi");

  $('.card-list').on('click', '.delete', removeCard);
  $('.card-list').on('click', '.finish', finishCard);
  $('#new-card-button').on('click', addInput); 

  function removeCard() {
  	//this.parentNode.remove();
  	$(this).parent().remove();
  }

  function finishCard() {
  	let $currentCard = $(this).parent();
	$('#done-column ul').append($currentCard);
	let $finish = $(this);
	$finish.remove();
   }

   function addInput() {
   	const $newCardInput = $('#new-card-text')
   	const inputValue = $('#new-card-text').val();

   	const newLi =  $( `
   		<li class="card todo">
	   		$(inputValue)
	   		<span class="delete">X</span>
	        <span class="finish">Finish</span>
	    </li>
   		`);

   	$newCardInput.val('')
   }
  

=======
  $('.card-list').on('click', '.card .delete', removeCard);
  $('.card-list').on('click', '.card .finish', finishCard);
  $('#new-card-button').on('click', addCard);
>>>>>>> f32cf9ff54be365157b227ef1fd2e7ca6f343148
});

function removeCard() {
  // this.parentNode.remove();
  $(this).parent().remove();
}

function finishCard() {
  const $this = $(this);
  const $listItem = $this.parent();
  $listItem.prependTo('#done-column .card-list')
  $this.remove();
}

function addCard() {
  const $newCardInput = $('#new-card-text');
  const inputValue = $newCardInput.val();
  const newLi = $(`
    <li class="card todo">
      ${inputValue}
      <span class="delete">X</span>
      <span class="finish">Finish</span>
    </li>
  `);

  $newCardInput.val('')

  $('#todo-column .card-list').append(newLi);
}
