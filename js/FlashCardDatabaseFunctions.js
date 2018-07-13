/***********************

Creator: Jonathan Sekela
csv file generated, flashcard-based library functions way

Library dependencies:
> jQuery

***********************/


var csvLoc = "docs/ef-fc-db-stringReadable.csv";
var fileToString = (callback) => {
	console.log("fileToString called. generating AJAX request...");
    $.get({
        url: csvLoc,
        dataType: "text",
        success: function(result) {
        	console.log("AJAX request successful. result: ");
        	console.log(result);
        	callback(result);
        },
        failure: function(xhr, status, error) {
            console.log("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
            alert("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
        }
    })
}
// =======

// PRECONDITION:  csv is an appropriately-constructed string
// POSTCONDITION: result is a 2D array parsed by '\n' and ','
var stringToArray = () => {
	// @TODO: add error-checking for 2D
	console.log("stringToArray called. splitting cardString by newline...");
	var csvLines = this.cardString.split("\n");
	console.log("split successful. generating array...");
	var result = new Array();
	for (var i = 0; i < csvLines.length; i++) {
		console.log("for loop iteration " + i + "...");
		// [0][0] is number [0][1] is class, [0][2] is unit, [0][3] is lesson
		result[i] = csvLines[i].split(",");
	}
	console.log("success! Returning result.");
	return result;
}
// =======

var fileToArray = () => {
	console.log("fileToArray called...");
	stringToArray(fileToString(csvLoc));
}
// =======

 var libraryArrayToString = (lib) => {
 	console.log("libraryArrayToString called...");
 	var result = "";
 	for (var i = 0; i < lib.length; i++) {
 		console.log("for loop iteration" + i+1 + "...");
 		row = lib[i++];
 		console.log("adding \"" + row[0] + "," + row[1] + "," + row[2] + "," + row[3] + "\\n\"...");
 		result += row[0] + "," + row[1] + "," + row[2] + "," + row[3] + "\n";
 	}
 	return result;
 }
 // =======

// @TODO: add lesson and word checking capability
var search = (form) => {
	console.log("search called...");
	var lib = fileToArray();
	var result = new Array();
	var resultLength = 0;
	console.log("search nested for loop called...");
	for (var i = 0; i < lib.length; i++) {
		// check class
		console.log("checking class " + form.class.value + "...");
		if (lib[i][1] === form.class.value) {
			// check unit
			console.log("checking unit " + form.unit.value + "...");
			if (Number(lib[i][2]) === Number(form.unit.value)) {
				console.log("adding to result...");
				result[resultLength++] = lib[i];
			}
		}
	}
	console.log("search success! returning result...");
	return result;
}