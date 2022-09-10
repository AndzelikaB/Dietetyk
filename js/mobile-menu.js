const menuButton = document.getElementById("menu-button")
const menuList = document.getElementById('menu-list')

menuButton.addEventListener('click', openMenu)

function openMenu() {
    menuList.classList.toggle("active");
}