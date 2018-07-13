/**********************************************************

Jonathan Sekela
Last Edit: 2018/04/25
Shenzhen 12 Flashcard search database

Library dependencies:
> jQuery
> FlashcardDatabaseClass.js

**********************************************************/

$(document).ready(initialDisplay());
//===============================================

// DESC:
// PRECONDITION:  html page is properly setup and started
// POSTCONDITION: #db div contains formatted table of all
//  EF flashcards sorted by card number
function initialDisplay() {
    console.log("initial display called...");
    fileToString(displayTable);
}
//=======

// DESC: Function to display table in designated html tag
// PRECONDITION:  data contains csv-format string
//                htmlLoc is a valid jQuery location on the current page
// POSTCONDITION: htmlLoc contains a formatted table of
//  data's contents
function displayTable(data, htmlLoc = $("#card-display")) {
    var result = "<table>";
    let i = 0;
    while (i < data.length) {
        result += "<tr>";
        while (!isnewline(data[i])) {
            result += "<td>";
            while (data[i] !== ','
                && !isnewline(data[i])) { // create table columns until comma
                result += (data[i++]); // add to result, increment i
            }

            result += "</td>";
            if (data[i] === ',')
                i++; // ignore comma
        }
        result += "</tr>"; // move onto next row
        i++; // add 1 to i every newline
    }
    result += "</table>";
    htmlLoc.html(result);
}