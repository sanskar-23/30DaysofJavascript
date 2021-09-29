const h1 = document.getElementById('main-title');

h1.style.textContent = 'Sanskar';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + '(changed!)';
