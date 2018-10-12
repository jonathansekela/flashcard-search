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
    // console.log("fileToArray started.");
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
const search = (form, lib, callback) => {
    let result = "";
    let formClass = form.class.value.toLowerCase();
    let formUnit  = form.unit.value.toLowerCase();
    let formLesson = form.lesson.value.toLowerCase();
    for (let i = 0; i < lib.length; i++) {
        // check class
        if (lib[i][1].toLowerCase() === formClass) {
            // check unit
            if (Number(lib[i][2].toLowerCase()) === Number(formUnit)) {
                result += lib[i] + "\n";
            }
        }
    }
    console.log(result);
    callback(result);
};