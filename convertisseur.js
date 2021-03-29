languages['6 dots'] = {
	dotMap: {
		0: {
			0: 1,
			1: 2, 
			2: 3
		},
		1: {
			0: 4,
			1: 5,
			2: 6
		}
	},
	numberPrefix: [6],
	latinToBraille: {
		"a": [1],
		"b": [1,2],
		"c": [1,4],
		"d": [1,4,5],
		"e": [1,5],
		"f": [1,2,4],
		"g": [1,2,4,5],
		"h": [1,2,5],
		"i": [2,4],
		"j": [2,4,5],
		"k": [1,3],
		"l": [1,2,3],
		"m": [1,3,4],
		"n": [1,3,4,5],
		"o": [1,3,5],
		"p": [1,2,3,4],
		"q": [1,2,3,4,5],
		"r": [1,2,3,5],
		"s": [2,3,4],
		"t": [2,3,4,5],
		"u": [1,3,6],
		"v": [1,2,3,6],
		"w": [2,4,5,6],
		"x": [1,3,4,6],
		"y": [1,3,4,5,6],
		"z": [1,3,5,6],
		" ": [],
		"0": [3, 4, 5, 6],
		"1": [1, 6],
		"2": [1, 2, 6],
		"3": [1, 4, 6],
		"4": [1, 4, 5, 6],
		"5": [1, 5, 6],
		"6": [1, 2, 4, 6],
		"7": [1, 2, 4, 5, 6],
		"8": [1, 2, 5, 6],
		"9": [2, 4, 6],
    }
}

let pre = document.getElementById("preVisu");

function getValue(){
	var input = document.getElementById("slidebarre").value;
	document.getElementById(preVisu).style.visibility='hidden';

	alert(input);


	
}
