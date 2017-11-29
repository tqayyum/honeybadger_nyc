var val1 = parseInt(prompt("Enter the 1st value: "));
var val2 = parseInt(prompt("Enter the 2nd value: "));
var symbol = prompt("Enter one of the mathematical operators +, -, *, / or ^ : ");

if (symbol === '+') {
	alert(val1 += val2);
}
if (symbol === '-') {
	alert(val1 -= val2);
}
if (symbol === '*') {
	alert(val1 *= val2);
}
if (symbol === '/') {
	alert(val1 /= val2);
}
if (symbol === '^') {
	alert(Math.pow(val1, val2));
}