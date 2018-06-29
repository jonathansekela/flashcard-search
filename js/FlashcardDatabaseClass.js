/***********************

Creator: Jonathan Sekela
csv file generated, flashcard-based library object class definition

Library dependencies:
> jQuery

***********************/

FlashcardDatabase = (csvLoc) =>
{

	// ======== Properties ==================== //

	this.cardString = "";
	this.cardArray = [];
	this.cardDict = {};

	// ======== Methods ======================= //

	// -------- Setter Functions -------------- //

	this.setCardString = () => {
		this.cardString = fileToString();
	}
	//=======

	this.setCardArray = () => {
		this.cardArray = fileToArray();
	}
	//=======

	this.setCardDict = () => {
		this.cardDict = fileToDict();
	}
	//=======

	// PRECONDITION:  loc is a client-side accessible url to a .csv file
	// POSTCONDITION: returns string containing file as-is
	this.fileToString = function() {
		console.log("fileToString called. generating AJAX request...");
	    $.get({
	        url: csvLoc,
	        dataType: "text",
	        success: function(result) {
	        	console.log("AJAX request successful. result: ");
	        	console.log(result);
	        	return result;
	        },
	        failure: function(xhr, status, error) {
	            console.log("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
	            alert("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
	        }
	    })
	}

	//=======

	this.fileToArray = function() {
		console.log("fileToArray called.");
		stringToArray(this.cardString);
	}
	//=======
	
	this.fileToDict = function() {
		console.log("fileToDict called.")
		stringToDict(fileToString(csvLoc));
	}
	//=======
	
	// PRECONDITION:  csv is an appropriately-constructed string
	// POSTCONDITION: result is a 2D array parsed by '\n' and ','
	this.stringToArray = function() {
		// @TODO: add error-checking for 2D
		console.log("stringToArray called. splitting cardString by newline...");
		var csvLines = this.cardString.split("\n");
		console.log("split successful. generating array...");
		var result = new Array();
		for (var i = 0; i < csvLines.length; i++) {
			console.log("for loop iteration " + i + "...");
			result[i] = csvLines[i].split(",");
		}
		console.log("success! Returning result.");
		return result;
	}
	//=======

	// PRECONDITION:  csv is an appropriately-constructed string
	//					csv is 2-column, key->value
	// POSTCONDITION: result is a dict containing csv values
	this.stringToDict = function() {
		console.log("stringToDict called. splitting cardString by newline...");
		var csvLines = this.cardString.split("\n");
		console.log("split successful. generating temporary array and dict...");
		var temp = new Array();
		var result = {};
		for (var i = 0; i < csvLines.length; i++) {
			console.log("for loop iteration " + i + "...");
			temp[i] = csvLines[i].split(",");
			result[temp[i][0]] = temp[i][1];
		}
		console.log("success! Returning result.");
		return result;
	}
	//=======

	this.search = function(form) {

	}

}