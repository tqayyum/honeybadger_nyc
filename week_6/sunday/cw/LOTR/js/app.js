// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'The Shire',
  'Rivendell',
  'Mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  let middleEarth = document.createElement('section');
  // console.log(middleEarth); 
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for(let land of lands){
    // console.log(land);
    let place = document.createElement('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land 
    place.setAttribute('id', land);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place); 
    let nameOfLand = document.createElement('h1');
    // console.log(nameOfLand);
    nameOfLand.innerHTML = land;
    // console.log(nameOfLand);
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
};

function makeHobbits() {
  console.log('Make hobbits');
  
  // display an unordered list of hobbits in the shire
  let getHobbitFromShire = document.getElementById('The Shire');
  let hobbitsList = document.createElement('ul');
  getHobbitFromShire.appendChild(hobbitsList);
  hobbits.sort();

  for (let getNameOfHobbits of hobbits) {   
    let nameOfHobbits = document.createElement('li');
    nameOfHobbits.innerHTML = getNameOfHobbits;
    // give each hobbit a class of "hobbit"
    nameOfHobbits.classList.add('hobbit');
    // list the hobbits alphabetically.  Maybe use the .sort() method.
    hobbitsList.appendChild(nameOfHobbits);
  }
};

function keepItSecretKeepItSafe() {
  console.log('Keep It Secret Keep It Safe');
  let getFrodo = document.querySelector('.hobbit');
  // add the ring as a child of Frodo
  let addRing = document.createElement('div');
  addRing.setAttribute('the-ring','The Ring');
  addRing.innerHTML = ('The Ring');
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  getFrodo.appendChild(addRing);
};

function makeBaddies() {
  console.log('Make Baddies');
  // display an unordered list of baddies in Mordor
  let baddieButton = document.getElementById('Mordor');
  let addToUl = document.createElement('ul');
  baddieButton.appendChild(addToUl);

  for(baddy of baddies){
    let addBaddiesToLi = document.createElement('li');
    addBaddiesToLi.innerHTML = baddy;
    addBaddiesToLi.classList.add('baddy');
    // give each of the baddies a class of "baddy"
    addToUl.appendChild(addBaddiesToLi);
  }
};

function makeBuddies() {
  console.log('Make Buddies');
  // create an aside tag and append it below mordor
  let buddieButton = document.getElementById('Mordor');
  let addToUl = document.createElement('ul');
  buddieButton.appendChild(addToUl);
  
  // display an unordered list of buddies in the aside
  for(buddy of buddies){
    let addBuddiesToLi = document.createElement('li');
    addBuddiesToLi.innerHTML = buddy;
    addBuddiesToLi.classList.add('buddy');
    // give each of the baddies a class of "buddy"
    addToUl.appendChild(addBuddiesToLi);
  }
};

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
  console.log('Leave The Shire');
  let getHobbitFromShire = document.getElementById('Rivendell');
  let hobbitsList = document.createElement('ul');
  getHobbitFromShire.appendChild(hobbitsList);
  hobbits.sort();

  for (let getNameOfHobbits of hobbits) {   
    let nameOfHobbits = document.createElement('li');
    nameOfHobbits.innerHTML = getNameOfHobbits;
    // give each hobbit a class of "hobbit"
    nameOfHobbits.classList.add('hobbit');
    // list the hobbits alphabetically.  Maybe use the .sort() method.
    hobbitsList.appendChild(nameOfHobbits);
  }
};

function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"
  console.log('Beautiful Stranger');
  let changeStrider = document.getElementsByClassName('buddy');
  changeStrider[3].innerHTML = 'Aragorn';
};

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  
  makeHobbits();
  makeBuddies();
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
};

function theBalrog() {
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
};

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
};

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if 
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom 
};

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};