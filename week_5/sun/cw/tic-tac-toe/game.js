console.log('loaded')

// WRITE A FUNCTION CALL sumOfThree that will accept 3 params and return their sum
function sumOfThree(num1=0, num2=0, num3=0) {

	return (num1 + num2 + num3);
}

// WRITE A FUNCTION CALLED productOfThree that will accept 3 params and return their product
function productOfThree(num1=1, num2=1, num3=1) {

	return (num1 * num2 * num3);
}

/*
var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

var sum = 0;
for (var i = 0; i < thisWeekTimes.length; i++) {
  sum += thisWeekTimes[i];
}
var thisWeekAvg = sum / thisWeekTimes.length;

var sum = 0;
for (var i = 0; i < lastWeekTimes.length; i++) {
  sum += lastWeekTimes[i];
}
var lastWeekAvg = sum / lastWeekTimes.length;

var sum = 0;
for (var i = 0; i < weekBeforeTimes.length; i++) {
  sum += weekBeforeTimes[i];
}
var weekBeforeAvg = sum / weekBeforeTimes.length;

console.log(thisWeekAvg);
console.log(lastWeekAvg);
console.log(weekBeforeAvg);
*/
/*
function getAverageOfLapTime (timesArray) {
	var thisWeekTimes = [52, 51, 53, 52, 54];
	var lastWeekTimes = [54, 57, 58, 53, 54, 58];
	var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

	var sum = 0;

	timesArray.forEach(function(currentTime){
		sum += currentTime;
	})
	return = sum/timesArray.length; 
}
*/
// WRITE A FUNCTION CALLED bigOrSmall it accepts 1 param and console logs "this number is big" if the number is over 10 and "this number is small" otherwise
function bigOrSmall (num) {
	if (num > 10){
		console.log('This is a big number');
	} else
		console.log('This is a small number');
}

//Write a function oddOrEven accepts one argument and console logs "this number is odd" if the number is odd and "this number is even" if the number is even
function oddOrEven (num) {
	if (num % 2 == 0){
		console.log('This is a even number');
	} else
		console.log('This is a odd number');
}

// Write a function call embiggen that accepts one argument, a string, and returns a CAPS LOCKED version of that string
function embiggen (val) {
	return val.toUpperCase();
}

// Write a function called reverser that accepts on argument, a string, and returns a reversed version of that string
function reverser (val) {
	const splitString = val.split('');
	const reversedStringArray = splitString.reverse();

	return reversedStringArray.join('');
}
// WRITE A FUNCTION doSomethingNtimes that accepts two arguments, a function and number indicating how many times to run the callback, it should run the callback that many times

function doSomethingNtimes(cb, num) {
	for (let i = 0; i < num; i++) {
	}
		return num;
}







