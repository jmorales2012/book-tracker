const newBookForm = document.querySelector('form');
const booksElement = document.querySelector('.books');

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

  const listAllBooks = () => {
    booksElement.innerHTML = '';
    fetch(API_URL)
      .then(response => response.json())
      .then(books => {
        books.forEach(book => {
        // create tr and append the book info
        const tr = document.createElement('tr');
        tr.classList.toggle('book');

        const title = document.createElement('td');
        title.textContent = book.title;

        const author = document.createElement('td');
        author.textContent = book.author;

        const status = document.createElement('td');
        status.textContent = book.status;

        const dateFinished = document.createElement('td');
        dateFinished.textContent = book.dateFinished;

        const delButtonTD = document.createElement('td');
        const delButton = document.createElement('a');
        delButton.classList.add('button-delete', 'fa', 'fa-times');
        delButtonTD.appendChild(delButton);

        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(status);
        tr.appendChild(dateFinished);
        tr.appendChild(delButtonTD);

        booksElement.appendChild(tr);
        });
      })
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