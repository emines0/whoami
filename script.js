
//navigation
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.link')

// console.log('TOGGLE ' + toggle);
// console.log('NAV ' + nav);

toggle.addEventListener('click', () => nav.classList.toggle('active'));

if (document.documentElement.clientWidth <= 810) {
    navLinks.forEach(link => link.addEventListener("click", function(e) {
        nav.classList.toggle('active')
    }));  
}