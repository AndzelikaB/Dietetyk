
window.onload = function () {
    const menuButton = document.getElementById("menu-button"), menuList = document.getElementById('menu-list')
    menuButton.addEventListener('click', () => {
        menuList.classList.toggle("active")
        console.log("lollo")
    })
}