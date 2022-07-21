var headerWrapper;
window.addEventListener('DOMContentLoaded', function () {
   console.log('DOM fully loaded and parsed');
   header = document.getElementById('site-header');

   window.onscroll = function () {
      if (window.pageYOffset >= headerWrapper.offsetHeight) {
         header.classList.add("sticky");
      } else {
         header.classList.remove("sticky");
      }
   }
});