/***********************

 Creator: Jonathan Sekela
 CSV-related utility functions

 Library dependencies:
 > jQuery

 ======== IMPORTANT: DELETE THIS ONCE DATABASE CLASS WORKS =========

 ***********************/

// PRECONDITION:  file is a client-side accessible url to a .csv file
// POSTCONDITION: returns string containing file as-is
function CSVfileToString(file) {
    $.get({
        url: file,
        dataType: "text",
        success: function (result) {
            // wrap return inside a promise to prevent display of empty variable
            return new Promise((resolve, reject) => {
                // @TODO: add error-checking to make sure it's a csv file
                resolve(result);
            })
        },
        failure: function (xhr, status, error) {
            alert("csv-utility fileToString(): " + xhr + " ||| " + status + " ||| " + error);
        }
    })
}

//=======

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

//=======

function CSVfileToArray(file) {
    return CSVstringToArray(CSVfileToString(file));
}