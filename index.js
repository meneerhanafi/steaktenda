




const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    document.body.classList.toggle('nav-open');
});
