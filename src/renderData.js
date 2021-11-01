export async function renderData(data) {
  let root = document.getElementById('root');
  root.innerHTML = '';
  for (var i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    id.innerText = i;
    let title = document.createElement('td');
    title.innerText = data[i].API;
    let category = document.createElement('td');
    category.innerText = data[i].Category;
    row.setAttribute('dataId', i);
    row.appendChild(id);
    row.appendChild(title);
    row.appendChild(category);
    root.appendChild(row);
  } 
}