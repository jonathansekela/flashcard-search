/***********************

 Creator: Jonathan Sekela
 csv file generated, flashcard-based library functions way

 Library dependencies:
 > jQuery

 ***********************/
const CSV_LOCATION = "docs/ef-fc-db-stringReadable.csv";

// jQuery call to get csv file in docs folder
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

const fileToArray = (callback) => {
    $.get({
        url: CSV_LOCATION,
        dataType: "text",
        success: function (result) {
            let csvLines = result.split("\n");
            let retVal = [];
            for (let i = 0; i < csvLines.length; i++) {
                // [0][0] is number [0][1] is class, [0][2] is unit, [0][3] is lesson
                retVal[i] = csvLines[i].split(",");
            }
            callback(retVal);
        },
        failure: function (xhr, status, error) {
            console.log("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
            alert("ERROR: fileToString(): " + xhr + " ||| " + status + " ||| " + error);
        }
    })
};
// =======

// @TODO: add lesson and word checking capability
// PRECONDITION: form is #search-params in index.js
//      > lib is the result of fileToArray()
// POSTCONDITION: result is a csv-format string to be passed to displayTable() in index.js
const searchByClassUnitLesson = (form, lib, callback) => {
    let result = "";
    result += lib[0] + "\n"; // header information

    let formClass = form.class.value.toLowerCase();
    let formUnit = form.unit.value.toLowerCase();
    let formLesson = form.lesson.value.toLowerCase();

    let isAlphabet = (formClass === "alphabet");
    for (let i = 1; i < lib.length; i++) {
        // check class
        if (lib[i][1].toLowerCase() === formClass) {
            // if searching for alphabet letters
            if (isAlphabet)
                result += lib[i] + "\n";
            // check unit
            else if (Number(lib[i][2].toLowerCase()) === Number(formUnit)) {
                result += lib[i] + "\n";
            }
        }
    }
    callback(result);
};
// =======

// @TODO: fix searchByWord so it finds the word in lib
const searchByWord = (word, lib, callback) => {
    let result = "";
    result += lib[0] + "\n"; // header information

    let formWord = word.value.toLowerCase();
    for (let i = 1; i < lib.length; i++) {
        console.log(lib[i][3] + " vs " + formWord);
        if (lib[i][3].toLowerCase() === formWord)
            result += lib[i] + "\n";
    }
    console.log(result);
    callback(result);
};