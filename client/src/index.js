import { displayMenu } from './menu.js';
import { displayLayout } from './layout.js';
import { displayInlineBookForm } from './inlineBookForm.js';


displayMenu();
displayLayout();
displayInlineBookForm();

const newBookForm = document.querySelector('form');
const booksElement = document.querySelector('#books');
const deleteButton = document.querySelector('.button-delete');

// create api link
// const API_URL = window.location.hostname === 'localhost' ?
//   'http://localhost:5000/books' : 'insert link here';
const API_URL = 'http://localhost:5000/books';

// create event listener for form submit
newBookForm.addEventListener('submit', (event) => {
  // prevent the page from reloading
  event.preventDefault();

  // create formData object
  const formData = new FormData(newBookForm);
  const title = formData.get('title');
  const author = formData.get('author');
  const status = formData.get('status');
  const dateFinished = formData.get('date-finished');

  const book =  {
    title,
    author,
    status,
    dateFinished
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
    }
  }).then(response => response.json())
    .then(createdBook => {
      console.log(createdBook);
      newBookForm.reset();
      listAllBooks();
    });
});

booksElement.addEventListener('click', (event) => {
  // if (event.target.classList.contains('.button-delete')) {
  //   console.log('delete button pressed');
  // }
  if (event.target.closest('.button-delete')) {
    // get the id of the tr (two parents above the delete button)
    let id = event.target.parentElement.parentElement.getAttribute('id');
    console.log(id);
    // pass that id onto the server
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ _id: id }),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then(response => response.json())
      .then(deletedBook => {
        console.log(deletedBook);
        listAllBooks();
      });
  }
});

const listAllBooks = () => {
  booksElement.innerHTML = '';
  fetch(API_URL)
    .then(response => response.json())
    .then(books => {
      books.forEach(book => {
        // create row and append the book info
        const newBook = document.createElement('div');
        // newBook.classList.add('row');
        newBook.setAttribute('id', book._id);
        newBook.classList.toggle('book');

        const title = document.createElement('div');
        title.textContent = book.title;

        const author = document.createElement('div');
        author.textContent = book.author;

        const status = document.createElement('div');
        status.textContent = book.status;

        const dateFinished = document.createElement('div');
        dateFinished.textContent = book.dateFinished;

        const buttonsDiv = document.createElement('div');
        const delButton = document.createElement('a');
        delButton.classList.add('button-delete', 'fa', 'fa-times');
        const editButton = document.createElement('a');
        editButton.classList.add('button-edit', 'fa', 'fa-pencil');
        buttonsDiv.appendChild(delButton);
        buttonsDiv.appendChild(editButton);

        // editButton.innerText = 'Button';

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(status);
        newBook.appendChild(dateFinished);
        newBook.appendChild(buttonsDiv);
  
        booksElement.appendChild(newBook);
        // console.log(booksElement);
        // console.log(newBook);
      });
    })
  };
