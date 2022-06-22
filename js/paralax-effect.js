var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

window.addEventListener('scroll', function () {
    const parallax = document.querySelector(".parallax");
    let scroolPosition = window.pageYOffset;

    parallax.style.transform = 'trnaslateY(' + scroolPosition * .5 + 'px)';




})