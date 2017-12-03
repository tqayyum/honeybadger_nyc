let nums = prompt('Enerer a set of numbers');

let splitNumbers = userInput.split(',');
let total = 0;

for (var i = 0; i < splitNumbers.length; i ++ ){
	total += parseInt(splitNumbers[i]);
}

