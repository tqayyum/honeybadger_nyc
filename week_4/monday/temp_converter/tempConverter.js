var temp = prompt("Enter the value :");
var scale = prompt("Select a scale F to C or C to F:").toLowerCase();

if (scale === 'f to c') {
	alert((temp - 32)*.5556);
}else{ (scale === 'c to f')
	alert((temp * 1.8)+32);
}