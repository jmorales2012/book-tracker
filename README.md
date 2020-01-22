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
[X] Make rough design of page layout
[X] Create index.html
[X] Add links for styles.css, skeleton.css, client.js
[X] Create page header
[X] Add sample books and style inline
[X] Create form to input books (title, author, status, date finished)
[X] Add event listener for form submit on <a> tag
[X] Make form inline and sleek
[X] Establish POST request for /books
[X] Change delete button to red 'x'
[X] Delete list before adding new list
[X] Let user delete book
[ ] Allow user to change read status
[ ] Allow user to edit date finished
[ ] Allow user to edit entries


Server
[X] Setup app and server packages
[X] Setup listening port
[X] Create db connection
[X] Handle GET requests for /
[X] Handle GET requests for /books
    [X] Find all books in db and return
[X] Handle POST request for /books
    [X] Create book
    [X] Insert book into db
[ ] Connect to MongoDB
[ ] Setup user accounts (registration, password, individual db's)











Future Goals
[ ] Let user sign up
[ ] User sees their own lists
[ ] Finished books are moved to bottom of list
[ ] Compile info on user data
  [ ] How many books were finished each month/year
[ ] Let user click on book and see detailed info
  [ ] Title, Author, Pages, Date Published, Cover Art, Buy Link