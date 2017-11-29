var val1 = prompt("Enter the 1st value: ");//.parseInt();
var val2 = prompt("Enter the 2nd value: ");//.parseInt();
var symbol = prompt("Enter one of the mathematical operators +, -, *, / or ^ : ");
var total = parseInt(val1) + parseInt(val2);

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
