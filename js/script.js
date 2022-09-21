async function addHeader() {
    const header = document.getElementById('site-header')
    const response = await fetch("../html/header.html")
    const headerHtml = await response.text();
    header.insertAdjacentHTML("beforeend", headerHtml);
    headerWrapper = document.getElementById("header-wrapper");
}

async function addMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const response = await fetch("../html/sitenav.html");
    const mobileHtml = await response.text();
    mobileMenu.insertAdjacentHTML("beforeend", mobileHtml);
    mobileWrapper = document.getElementById("mobile-wrapper");
}

async function addFooter() {
    const footer = document.getElementById('site-footer')
    const resp = await fetch("../html/footer.html");
    const html = await resp.text();
    footer.insertAdjacentHTML("beforeend", html);
}