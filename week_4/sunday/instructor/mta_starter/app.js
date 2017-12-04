// Creating the array for L, N, And S Train
let l = ['8th Ave ', ' 6th Ave ', ' Union Square ', ' 3rd Ave ', ' 1st Ave ', ' Bedford Ave'];
let n = ['Times Square ', ' Herald Square ', ' 28th St ', ' 23rd St - WHAM Nexus ', ' Union Square ', ' 8th St'];
let s = ['Grand Central ', ' 33rd St ', ' 28th St ', ' 23rd St ', ' Union Square ', ' Astor Place'];


let trainMenu = ['L', 'N', 'S', 'Q'];
	
while ( trainMenu !== 'q') {
	// Prompting user for information.
	let train = prompt(`Please select a line ${trainMenu.join(', ')}`).toUpperCase();

	//Dsiplaying the result from what thr user selects
	if (train === 'l') {console.log(l.toString());} 
	else if (train === 'n'){console.log(n.toString());}
	else if (train === 's');{console.log(s.toString());}
}	