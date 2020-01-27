import { displayInlineBookForm } from './inlineBookForm.js';
import { bookProperties } from './bookProperties.js';
// import { updateTable } from './updateTable.js';

const content = document.querySelector('#content');
const booksContainer = document.createElement('div');
booksContainer.classList.add('width-80', 'center', 'book-container');

const displayHeader = () => {

  const headerRow = document.createElement('div');
  headerRow.classList.add('row');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('book');
  headerRow.appendChild(headerDiv);

  for (let i = 0; i < bookProperties.length; i++) {
    let headerTitle = document.createElement('p');
    headerTitle.classList.add('header-title');
    headerTitle.innerText = bookProperties[i];
    headerDiv.appendChild(headerTitle);
  }
  booksContainer.appendChild(headerRow);
  content.appendChild(booksContainer);
};

const displayBooks = () => {
  const booksRow = document.createElement('div');
  booksRow.classList.add('row');
  booksRow.id = 'books';

  booksContainer.appendChild(booksRow);
};


const displayLayout = () => {
  displayHeader();
  displayBooks();
  booksContainer.appendChild(displayInlineBookForm());
}

export { displayLayout };