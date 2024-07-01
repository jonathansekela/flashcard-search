/*******************************
 Jonathan Sekela
 flashcard-search utility functions
 *******************************/
function isAnInt(aChar) {
	var numcheck = RegExp(/\d/);
	return numcheck.test(aChar);
}

//=======

function isANumber(aString) {
	for (var i = 0; i < aString.length; i++) {
		if (!isAnInt(aString[i])) return false;
	}
	return true;
}

//=======

function isalpha(aChar) {
	var lettercheck = RegExp(/\w/);
	return lettercheck.test(aChar);
}

//=======

function isspace(aChar) {
	var spacecheck = RegExp(/\s/);
	return spacecheck.test(aChar);
}

//=======

function isalnum(aChar) {
	if (!isAnInt(aChar) && !isalpha(aChar)) return false;
	return true;
}

//=======

function isnewline(aChar) {
	var newlinecheck = RegExp(/\n/);
	return newlinecheck.test(aChar);
}

//=======