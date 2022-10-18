document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('myVideo');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});




const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    document.body.classList.toggle('nav-open');
});
