
//navigation
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

console.log('TOGGLE ' + toggle);
console.log('NAV ' + nav);

toggle.addEventListener('click', () => nav.classList.toggle('active'));