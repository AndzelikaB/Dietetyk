var headerWrapper = document.getElementById("header-wrapper");
window.onscroll = function () {
   if (window.pageYOffset >= headerWrapper.offsetHeight) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
}
