async function addHeader() {
    const header = document.getElementById('site-header')
    const response = await fetch("../html/header.html")   // (poczekaj aż pobierze header.html) pobierz wszystko
    const headerHtml = await response.text();           //zwraca odpowiedź w formacie text -> funkcja do przerobienia na text
    header.insertAdjacentHTML("beforeend", headerHtml); // włóż w miejsce przed elementem header fragment pobrany headerhtml
    headerWrapper = document.getElementById("header-wrapper");
}

async function addFooter() {
    const footer = document.getElementById('site-footer')
    const resp = await fetch("../html/footer.html");
    const html = await resp.text();
    footer.insertAdjacentHTML("beforeend", html);
}