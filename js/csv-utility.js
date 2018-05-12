/***********************

Creator: Jonathan Sekela
CSV-related utility functions

***********************/

// jQuery required
// PRECONDITION:  file is an accessible url to a .csv file
// POSTCONDITION: returns string containing file as-is
function CSVfileToString(file) {
    $.get({
        url: file,
        dataType: "text",
        success: function(result) {
        	// @TODO: add error-checking to make sure it's a csv file
        	return result;
        },
        failure: function(xhr, status, error) {
            alert("csv-utility fileToString(): " + xhr + " ||| " + status + " ||| " + error);
        }
    })
}

// PRECONDITION:  csv is an appropriately-constructed string
// POSTCONDITION: result is a 2D array parsed by '\n' and ','
function CSVstringToArray(csv) {
	// @TODO: add error-checking for 2D
	var csvLines = csv.split("\n");
	var result = new Array();
	for (var i = 0; i < csvLines.length; i++) {
		result[i] = csvLines[i].split(",");
	}
	return result;
}

function CSVfileToArray(file) {
	return CSVstringToArray(CSVfileToString(file));
}

// PRECONDITION:  csv is an appropriately-constructed string
//					csv is 2-column, key->value
// POSTCONDITION: result is a dict containing csv values
function CSVstringToDict(csv, callback) {
	var csvLines = csv.split("\n");
	var temp = new Array();
	var result = {};
	for (var i = 0; i < csvLines.length; i++) {
		temp[i] = csvLines[i].split(",");
		result[temp[i][0]] = temp[i][1];
	}
	callback(result);
}