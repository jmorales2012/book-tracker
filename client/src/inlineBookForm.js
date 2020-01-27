import { bookProperties } from './bookProperties.js';

const displayInlineBookForm = () => {
  // const formRow = document.createElement('div');
  // formRow.classList.add('row', 'form-row');
  const form = document.createElement('form');
  form.classList.add('row');

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('book');

  form.appendChild(inputContainer);

  // formRow.appendChild(form);

  // make title input
  const titleDiv = document.createElement('div');
  const titleInput = document.createElement('input');
  titleInput.classList.add('mb-0');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.name = 'title';
  titleInput.placeholder = 'Title';
  titleDiv.appendChild(titleInput);

  // make author input
  const authorDiv = document.createElement('div');
  const authorInput = document.createElement('input');
  authorInput.classList.add('mb-0');
  authorInput.type = 'text';
  authorInput.id = 'author';
  authorInput.name = 'author';
  authorInput.placeholder = 'Author';
  authorDiv.appendChild(authorInput);

  // make status dropdown
  const statusDiv = document.createElement('div');
  const statusSelect = document.createElement('select');
  statusSelect.classList.add('mb-0');
  statusSelect.id = 'status';
  statusSelect.name = 'status';
  
  const statusOptions = ['Read', 'Reading', 'Not Read'];
  for (let i = 0; i < statusOptions.length; i++) {
    let option = document.createElement('option');
    option.value = statusOptions[i];
    option.innerText = statusOptions[i];
    statusSelect.appendChild(option);
  }
  statusDiv.appendChild(statusSelect);

  // make date selector input
  const dateDiv = document.createElement('div');
  const dateInput = document.createElement('input');
  dateInput.classList.add('mb-0', 'date-selector');
  dateInput.type = 'date';
  dateInput.id = 'date-finished';
  dateInput.name = 'date-finished';
  dateDiv.appendChild(dateInput);

  // make submit button
  const submitDiv = document.createElement('div');
  const submitButton = document.createElement('button');
  submitButton.classList.add('mb-0', 'button', 'button-primary');
  submitButton.innerText = 'Add Book';
  submitDiv.appendChild(submitButton);

  inputContainer.appendChild(titleDiv);
  inputContainer.appendChild(authorDiv);
  inputContainer.appendChild(statusDiv);
  inputContainer.appendChild(dateDiv);
  inputContainer.appendChild(submitDiv);

  return form;
}
export { displayInlineBookForm };