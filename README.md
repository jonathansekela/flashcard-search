# flashcard-search Beta 2.2.0
## Client-side flashcard search web-app
### Purpose: convenient EF SSA-SSC 2.0 flashcard search tool

This app will help EF teachers more easily find cards for classes based on card name, number, class, and unit.

Currently requires in-browser "find" function to search for specific words.

### Workflow:
1. [x] Read .csv file
2. [x] Separate into searchable array
3. [ ] Search form
    * [x] by class: SSA-SSC
    * [x] by unit: 1-8
    * [ ] by lesson: 1-8 _(will require tedious amounts of digging through the teacher notes...)_
    * [ ] by word: simple search bar
4. [x] Results In a table, easily read
    * [ ] table doubles as checklist
5. [x] reset button

#### change-log
- 2018/11/09: added trim() function to searchByWord; it fixed the problem. Application can now search by word.
- 2018/10/20: began adding search by word functionality and checklist functionality
   - js: fix searchByWord so it finds the word in lib
   - css & js: make line-through class work correctly when table row clicked
- 2018/10/12: Beta 2.0.0: Search by class and unit works now - changed html call to correct, old-style async callback pyramid
- 2018/10/11: Began work on search() logic. fileToString(StringToArray()) causes a typeError: cardString is undefined. Currently working on solutions.
   - callback hell on index.html:79 :\(
   - deleted csv-utility.js - redundant, no longer needed
   - combined fileToString and stringToArray code into fileToArray
   - fixed button locations to outside of form element (prevents page refresh)
- 2018/09/05: finished ef-fc-db and ef-fc-db-stringReadable. The page still works with all 453 flashcards. It now works when using the Find function on desktop!
- 2018/09/04: eliminated some console.log(), cleaned up some AJAX code, deleted FlashcardDatabaseClass.js
- 2018/08/30: fixed displayTable while infinite loop problem; table now displays below search section. inline CSS added to created table.
   - Note: the table itself is not finished yet; more research into the FC system is needed to complete it.
- 2018/07/13: changed js to functional instead of object-oriented for simplicity's sake; added A LOT of console.log
   - CURRENT PROBLEM: there seems to be an infinite loop in either displayTable or one of the FlashCardDatabaseFunctions.js functions.
- 2018/06/29: added setter functions and EcmaScript syntax, changed the class layout
- 2018/06/28: added search form to index.html
	- Current options: class, unit, lesson
- 2018/06/18: started FlashcardDatabase class construction