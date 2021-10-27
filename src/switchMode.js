export async function switchMode() {
  let doc = document.getElementById('main');
  let btnAuth = document.getElementById('btnAuth');
  let select = document.getElementById('category');
  let select2 = document.getElementById('api');
  let switchBtn = document.getElementById('switchBtn');
  if ( doc.classList.contains('dark-mode') ) {
    doc.className = 'light-mode';
    select.className = 'light-mode';
    select2.className = 'light-mode';
    switchBtn.className = 'lightmode-button';
    btnAuth.className = 'lightmode-button';
    switchBtn.innerText = 'Dark mode';
    localStorage.setItem('color', 'light-mode');    
  } else {
    doc.className = 'dark-mode';
    select.className = 'dark-mode';
    select2.className = 'dark-mode';
    switchBtn.className = 'darkmode-button';
    btnAuth.className = 'darkmode-button';
    switchBtn.innerText = 'Light mode';
    localStorage.setItem('color', 'dark-mode');
  }
}