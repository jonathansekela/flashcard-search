# flashcard-search 0.3.2
## Client-side flashcard search web-app
### Purpose: convenient EF SSA-SSC flashcard search tool

This app will help EF teachers more easily find cards for classes based on card name, number, class, and unit.

### Workflow:
1. Read .csv file
2. Separate into searchable array
3. Search form
    * by class: SSA-SSC
    * by unit: 1-8
    * by lesson: 1-8
       * _will require tedious amounts of digging through the teacher notes..._
4. Results In a table, easily read
5. reset button

#### change-log
- 2018/06/28: added search form to index.html
	- Current options: class, unit, lesson
- 2018/06/18: started FlashcardDatabase class construction