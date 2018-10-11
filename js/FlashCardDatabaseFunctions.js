/***********************

 Creator: Jonathan Sekela
 csv file generated, flashcard-based library functions way

 Library dependencies:
 > jQuery

 ***********************/
const CSV_LOCATION = "docs/ef-fc-db-stringReadable.csv";

// jQuery call to get csv file in docs
const fileToString = (callback) => {
    $.get({
        url: CSV_LOCATION,
        dataType: "text",
        success: function (result) {
            callback(result);
            return result;
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
const stringToArray = (cardString) => {
    console.log("stringToArray called. splitting cardString by newline...");
    let csvLines = cardString.split("\n");
    console.log("split successful. generating array...");
    let result = [];
    for (let i = 0; i < csvLines.length; i++) {
        console.log("for loop iteration " + i + "...");
        // [0][0] is number [0][1] is class, [0][2] is unit, [0][3] is lesson
        result[i] = csvLines[i].split(",");
    }
    console.log("success! Returning result.");
    return result;
};
// =======

const fileToArray = () => {
    console.log("fileToArray called...");
    // return fileToString(stringToArray);
    return stringToArray(fileToString);
};
// =======

const libraryArrayToString = (lib) => {
    console.log("libraryArrayToString called...");
    let result = "";
    let row;
    for (let i = 0; i < lib.length; i++) {
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
//      > lib is the result of fileToArray()
// POSTCONDITION: result is a csv-format string to be passed to displayTable() in index.js
const search = (form, lib) => {
    console.log("search called...");

    console.log(lib.length + " is lib's length.");

    let result = "";
    console.log("search nested for loop called...");
    for (let i = 0; i < lib.length; i++) {
        // check class
        console.log("checking class " + form.class.value + "...");
        if (lib[i][1] === form.class.value) {
            // check unit
            console.log("checking unit " + form.unit.value + "...");
            if (Number(lib[i][2]) === Number(form.unit.value)) {
                console.log("adding to result...");
                result += lib[i] + "\n";
            }
        }
    }
    console.log("search success! result: " + result.length + " characters");
    console.log(result);
    return result;
};