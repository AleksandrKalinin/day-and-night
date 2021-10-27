import './style.css';

const URL = 'https://api.publicapis.org/entries';

window.onload = function() {
  getItems();
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

  let select = document.createElement('select');
  select.setAttribute('name', 'Category');
  select.setAttribute('id', 'category');

  let select2 = document.createElement('select');
  select2.setAttribute('name', 'API');
  select2.setAttribute('id', 'api');

  doc.className = localStorage.getItem('color') || 'light-mode';
  select.className = localStorage.getItem('color') || 'light-mode';
  select2.className = localStorage.getItem('color') || 'light-mode';

  let btn = document.createElement('button');
  btn.setAttribute('id', 'switchBtn');
  btn.addEventListener('click', switchMode);
  if ( doc.classList.contains('dark-mode') ) {
    btn.innerText = 'Light mode';
    btn.className = 'darkmode-button';
  } else {
    btn.innerText = 'Dark mode';
    btn.className = 'lightmode-button';
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
  main.appendChild(btn);
}

function filterData(e) {
  let name = e.target.name;
  let newData = data.entries.filter(item => item[name] === e.target.value);
  import('./renderData.js').then((module) => { 
    module.renderData(newData);
  }); 
}

function switchMode() {
  let doc = document.getElementById('main');
  let select = document.getElementById('category');
  let select2 = document.getElementById('api');
  let switchBtn = document.getElementById('switchBtn');
  if ( doc.classList.contains('dark-mode') ) {
    doc.className = 'light-mode';
    select.className = 'light-mode';
    select2.className = 'light-mode';
    switchBtn.className = 'lightmode-button';
    switchBtn.innerText = 'Dark mode';
    localStorage.setItem('color', 'light-mode');    
  } else {
    doc.className = 'dark-mode';
    select.className = 'dark-mode';
    select2.className = 'dark-mode';
    switchBtn.className = 'darkmode-button';
    switchBtn.innerText = 'Light mode';
    localStorage.setItem('color', 'dark-mode');
  }
}