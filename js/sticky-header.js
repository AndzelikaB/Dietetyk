var headerWrapper;
var header;
window.addEventListener('DOMContentLoaded',function () {
  header = document.getElementById('site-header');
});
window.onscroll = function () {
   if (window.pageYOffset >= headerWrapper.offsetHeight) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
}
