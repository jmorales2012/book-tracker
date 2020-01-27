const content = document.querySelector('#content');

const displayMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('menu-links');

  const loginLink = document.createElement('a');
  loginLink.classList.add('button');
  loginLink.innerText = 'Login';

  const registerLink = document.createElement('a');
  registerLink.classList.add('button', 'button-primary');
  registerLink.innerText = 'Sign Up';

  buttonsDiv.appendChild(loginLink);
  buttonsDiv.appendChild(registerLink);

  const pageHeader = document.createElement('h1');
  pageHeader.innerText = 'Book Tracker';

  menu.appendChild(loginLink);
  menu.appendChild(registerLink);
  menu.appendChild(pageHeader);

  content.appendChild(menu);
}

export { displayMenu };