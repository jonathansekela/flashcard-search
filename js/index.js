/**********************************************************

 Jonathan Sekela
 Last Edit: 2018/11/10
 Shenzhen 12 Flashcard search database

 Library dependencies:
 > jQuery
 > FlashCardDatabaseFunctions.js
 > Bootstrap CSS

 **********************************************************/

$(document).ready(function () {
	initialDisplay();

	// @TODO: make line-through work correctly
	$("td").click(function () {
		$(this).toggleClass("cross");
	});
});

//===============================================

// PRECONDITION:  html page is properly setup and started
// POSTCONDITION: #db div contains formatted table of all
//  EF flashcards sorted by card number
function initialDisplay() {
	fileToString(displayTable);
}

//=======

// DESC: Function to display table in designated html tag
// PRECONDITION:  data contains csv-format string
//                htmlLoc is a valid jQuery location on the current page
// POSTCONDITION: htmlLoc contains a formatted table of
//  data's contents
function displayTable(data, htmlLoc = $("#card-display")) {
	let result = "<table class='table table-striped table-hover'>";
	let i = 0;
	result += "<tr>";

	// Create header for table
	while (!isnewline(data[i])) {
		result += "<th>";
		while (data[i] !== ',' && !isnewline(data[i])) {
			result += data[i++];
		}
		result += "</th>";
		if (data[i] === ',') i++;
	}

	// continue with the rest of the table
	while (i < data.length) {
		result += "<tr>";

		while (i < data.length && !isnewline(data[i])) {
			result += "<td>";

			while (i < data.length
			&& data[i] !== ','
			&& !isnewline(data[i])) { // create table columns until comma or end of file
				result += data[i++]; // add to result, increment i
			}

			result += "</td>"; // move onto next column
			if (i < data.length && data[i] === ',') i++; // ignore comma

		}
		result += "</tr>"; // move onto next row
		i++; // add 1 to i every newline

	}
	result += "</table>";
	htmlLoc.html(result);
}

// @TODO: make line-through work correctly
function toggleCross(elem) {
	if (elem.classList.contains('checked')) {
		elem.classList.remove('checked');
	} else {
		elem.classList.add('checked');
	}
}