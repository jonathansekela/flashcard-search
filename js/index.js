/**********************************************************

Jonathan Sekela
Last Edit: 2018/04/25
Shenzhen 12 Flashcard search database

Library dependencies:
> jQuery

**********************************************************/

$(document).ready(initialDisplay());
//===============================================

// DESC:
// PRECONDITION: html page is properly setup and started
// POSTCONDITION: #db div contains formatted table of all
//  EF flashcards sorted by card number
function initialDisplay() {

}
//===============================================

// Takes a location to a .csv file, returns a string
function getTableString(loc) {
    $.get({
        url: loc,
        dataType: 'text',
        success: function(data) {
            return data;
        },
        error: function(xhr, status, error) {
            alert(xhr+' ||| '+status+' ||| '+error);
        }
    })
}

// DESC: Function to display table in #db div
// PRECONDITION: data contains csv-format string
// POSTCONDITION: #db contains a formatted table of
//  data's contents
function displayTable(data) {
    var result = "<table>";
    let i = 0;
    while (i < data.length) {
        result += "<tr>";
        while (isalpha(data[i])
            || isspace(data[i])
            && !isnewline(data[i])
        ) {
            result += "<td>";
            while (data[i] !== ','
            && !isnewline(data[i])) // create table columns until comma
                result += (data[i++]); // add result, increment i

            result += "</td>";
            if (data[i] === ',')
                i++; // ignore comma
        }
        result += "</tr>"; // move onto next row
        i++; // add 1 to i every newline
    }
    result += "</table>";
    $("#db").html(result);
}
//===============================================

// DESC: Function to find all relevant flashcards
// PRECONDITION: condition contains JSON-encoded list of 
//  requirements
// POSTCONDITION: returns csv-format string containing
//  all relevant results
function search(condition) {
    $.get({
        url: "docs/ef-fc-db.csv",
        dataType: "text",
        success: function(data) {
            // search logic here
        },
        error: function(xhr, status, error) {
            alert(error+'\n'+info);
        }
    })
}