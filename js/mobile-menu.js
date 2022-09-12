var mobileWrapper;
window.onload = function () {
    const menuButton = document.getElementById("menu-button"), menuList = document.getElementById('menu-list')
    menuButton.addEventListener('click', () => {
        menuList.classList.toggle("active")
    })

    mobileMenu = document.getElementById('mobile-menu');
    window.onscroll = function () {
        if (window.pageYOffset >= mobileWrapper.offsetHeight) {
            mobileMenu.classList.add("stickyMenu");
        } else {
            mobileMenu.classList.remove("stickyMenu");
        }
    }
}
