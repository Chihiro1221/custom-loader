import readme from './README.md';

console.log('hello monday');

const div = document.createElement('div');
div.innerHTML = readme;
document.body.appendChild(div);
