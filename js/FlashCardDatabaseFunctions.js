/***********************

 Creator: Jonathan Sekela
 csv file generated, flashcard-based library functions way

 Library dependencies:
 > jQuery

 ***********************/


// CSV file location
var CSV_LOCATION = "docs/ef-fc-db-stringReadable.csv";

// jQuery call to get csv file in docs
var fileToString = (callback) => {
    $.get({
        url: CSV_LOCATION,
        dataType: "text",
        success: function (result) {
            return callback(result);
        },
        failure: function (xhr, status, error) {
            console.log("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
            alert("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
        }
    })
};
// =======

// PRECONDITION:  csv is an appropriately-constructed string
// POSTCONDITION: result is a 2D array parsed by '\n' and ','
var stringToArray = (cardString) => {
    console.log("stringToArray called. splitting cardString by newline...");
    var csvLines = cardString.split("\n");
    console.log("split successful. generating array...");
    var result = [];
    for (var i = 0; i < csvLines.length; i++) {
        console.log("for loop iteration " + i + "...");
        // [0][0] is number [0][1] is class, [0][2] is unit, [0][3] is lesson
        result[i] = csvLines[i].split(",");
    }
    console.log("success! Returning result.");
    return result;
};
// =======

var fileToArray = () => {
    console.log("fileToArray called...");
    return fileToString(stringToArray());
};
// =======

var libraryArrayToString = (lib) => {
    console.log("libraryArrayToString called...");
    var result = "";
    for (var i = 0; i < lib.length; i++) {
        console.log("for loop iteration" + i + 1 + "...");
        row = lib[i++];
        console.log("adding \"" + row[0] + "," + row[1] + "," + row[2] + "," + row[3] + "\\n\"...");
        result += row[0] + "," + row[1] + "," + row[2] + "," + row[3] + "\n";
    }
    return result;
};
// =======

// @TODO: add lesson and word checking capability
// PRECONDITION: form is #search-params in index.js
// POSTCONDITION: result is a csv-format string to be passed to displaytable() in index.js
var search = (form) => {
    console.log("search called...");
    var lib = fileToArray();
    var result = "";
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
                result += lib[i] + ",";
            }
        }
    }
    console.log("search success! returning result...");
    return result;
};