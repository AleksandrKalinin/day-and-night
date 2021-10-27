import './style.css';

async function load() {
   let switchModule = await import('./switchMode.js');
   let btnSwitch = document.getElementById('btnSwitch');
   btnSwitch.addEventListener('click', switchModule.switchMode);
}

const URL = 'https://api.publicapis.org/entries';

window.onload = function() {
  load();
  getItems();
  const authTxt = document.getElementById('authTxt');
  const user = localStorage.getItem('user');
  if (user) {
    authTxt.innerText = `Welcome, ${user}`;
  }
}

let data;

async function getItems() {
  try {
    let res = await fetch(URL);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    data = await res.json();
    import('./renderData.js').then((module) => { 
      module.renderData(data.entries);
      getCategories(data.entries);
    });
  } catch ({ error }) {
    throw new Error(error);
  }
}  
  
async function getCategories(data) {
  let doc = document.getElementById('main');
  let loginBlock = document.getElementById('loginBlock');

  let select = document.createElement('select');
  select.setAttribute('name', 'Category');
  select.setAttribute('id', 'category');

  let select2 = document.createElement('select');
  select2.setAttribute('name', 'API');
  select2.setAttribute('id', 'api');

  doc.className = localStorage.getItem('color') || 'light-mode';
  select.className = localStorage.getItem('color') || 'light-mode';
  select2.className = localStorage.getItem('color') || 'light-mode';

  let btnSwitch = document.getElementById('btnSwitch');
  let btnAuth = document.getElementById('btnAuth');

  if ( doc.classList.contains('dark-mode') ) {
    btnSwitch.innerText = 'Light mode';
    btnSwitch.className = 'darkmode-button';
    btnAuth.className = 'darkmode-button';
  } else {
    btnSwitch.innerText = 'Dark mode';
    btnSwitch.className = 'lightmode-button';
    btnAuth.className = 'lightmode-button';
  }

  if (localStorage.getItem('user')) {
    btnAuth.innerText = 'Logout';
  } else {
    btnAuth.innerText = 'Login';
  }

  let head = document.getElementById('head');
  const uniqueItems = [...new Set(data.map(item => item.Category))];
  for (var i = 0; i < uniqueItems.length; i++) {
    let option = document.createElement('option');
    option.innerText = uniqueItems[i];
    option.setAttribute('value', uniqueItems[i]);
    select.appendChild(option);
  }

  for (var i = 0; i < data.length; i++) {
    let option = document.createElement('option');
    option.innerText = data[i].API;
    option.setAttribute('value', data[i].API);
    select2.appendChild(option);
  }

  select.addEventListener('change', filterData);

  select2.addEventListener('change', filterData); 

  head.appendChild(select);
  head.appendChild(select2);
}

function filterData(e) {
  let name = e.target.name;
  let newData = data.entries.filter(item => item[name] === e.target.value);
  import('./renderData.js').then((module) => { 
    module.renderData(newData);
  }); 
}

let modal = document.getElementById('modal');

let btnAuth = document.getElementById('btnAuth');
btnAuth.addEventListener('click', login);

function login() {
  let user = localStorage.getItem('user');
  const authTxt = document.getElementById('authTxt');
  if (!user) {
    modal.classList.toggle('modal-overlay_active');
  } else {
    localStorage.removeItem('user');
    console.log('you are already authorised');
    authTxt.innerText = 'You are not authorised';
    btnAuth.innerText = 'Login';
  }  
}

let btnModal = document.getElementById('btnModal');
btnModal.addEventListener('click', authoriseUser);

function authoriseUser() {
  let inputVal = document.getElementById('inputModal').value;
  if (inputVal !== '') {
    localStorage.setItem('user', inputVal);
    modal.classList.toggle('modal-overlay_active');
    const authTxt = document.getElementById('authTxt');
    authTxt.innerText = `Welcome, ${inputVal} !`;
    btnAuth.innerText = 'Logout';
    document.getElementById('inputModal').value = '';
  } else {
    alert('Username cannot be empty');
  }
}