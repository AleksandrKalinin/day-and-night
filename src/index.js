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
  let select = document.createElement('select');
  select.setAttribute('name', 'Category');
  let select2 = document.createElement('select');
  select2.setAttribute('name', 'API');
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
