const val1 = parseInt(prompt("Enter the 1st value: ")) || 0;
const val2 = parseInt(prompt("Enter the 2nd value: ")) || 0;
const symbol = prompt("Enter one of the mathematical operators +, -, *, / or ^ : ");


// This section is were the operation is done
if (symbol === '+') {
	alert(val1 + val2);
}
if (symbol === '-') {
	alert(val1 - val2);
}
if (symbol === '*') {
	alert(val1 * val2);
}
if (symbol === '/' && val2 !== 0) {
	alert(val1 / val2);
}
if (symbol === '^') {
	alert(Math.pow(val1, val2));
}