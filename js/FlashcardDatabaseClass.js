/***********************

Creator: Jonathan Sekela
csv file generated, flashcard-based library object class definition

Library dependencies:
> jQuery

***********************/

class FlashcardDatabase
{
	constructor(csvLoc) {
		this.cardString = fileToString(csvLoc);
		this.cardArray = fileToArray(csvLoc);
		this.cardDict = fileToDict(csvLoc);
	}
	//=======

	fileToString(loc) {
	    $.get({
	        url: loc,
	        dataType: "text",
	        success: function(result) {
	        	return result;
	        },
	        failure: function(xhr, status, error) {
	            alert("csv-utility fileToString(): " + xhr + " ||| " + status + " ||| " + error);
	        }
	    })
	}
	//=======

	fileToArray(loc) {
		stringToArray(fileToString(loc));
	}
	//=======
	
	fileToDict(loc) {
		stringToDict(fileToString(loc));
	}
	//=======
	
	stringToArray(csv) {
		// @TODO: add error-checking for 2D
		var csvLines = csv.split("\n");
		var result = new Array();
		for (var i = 0; i < csvLines.length; i++) {
			result[i] = csvLines[i].split(",");
		}
		return result;
	}
	//=======

	stringToDict(csv) {
		var csvLines = csv.split("\n");
		var temp = new Array();
		var result = {};
		for (var i = 0; i < csvLines.length; i++) {
			temp[i] = csvLines[i].split(",");
			result[temp[i][0]] = temp[i][1];
		}
		return result;
	}
	//=======

	searchByNumber() {

	}
	//=======

	searchByDef() {

	}
	//=======
}