Book Tracking App

End Goals
* Let user input book title, author and if read or not
* Let user input the date they finished the book
* Let user delete book from list
* Store book info in database
* Show list of books on home page
* Separate between read and not read
* When user adds book, auto update the page

|-- Title --|-- Author --|-- Status --|-- Date Finished --|
| Book #1   | Author #1  | Read       | January 8, 2020   |
| Book #2   | Author #2  | Readng Now |                   |
| Book #3   | Author #3  | Not Read   |                   |
|---------------------------------------------------------|


Front End
[ ] Make rough design of page layout
[ ] Create index.html
[ ] Add links for styles.css, skeleton.css, client.js
[ ] Create page header
[ ] Add sample books and style inline
[ ] Create form to input books (title, author, status, date finished)
[ ] Make form inline and sleeek
[ ] Establish POST request for /books


Server
[ ] Setup app and server packages
[ ] Setup listening port
[ ] Create db connection
[ ] Grab all books and put in db
[ ] Handle GET requests for /
[ ] Handle GET requests for /books
    [ ] Find all books in db and return
[ ] Handle POST request for /books
    [ ] Create book
    [ ] Insert book into db











Future Goals
* Let user sign up
* User sees their own lists
* Let user click on book and see detailed info
  * Title, Author, Pages, Date Published, Cover Art, Buy Link