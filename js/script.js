// // const content = document.querySelector('#site-content')
// const slideshow = document.querySelector('#slideshow')


// fetch('/header.html')
// .then(res=>res.text())
// .then(data=>{
//     header.innerHTML=data
//     const parser = new DOMParser()
//     const doc = parser.parseFromString(data, 'text/html')
//     eval(doc.querySelector('script').textContent)
// })

// fetch('/slideshow.html')
// .then(res=>res.text())
// .then(data=>{
//     slideshow.innerHTML=data
//     const parser = new DOMParser()
//     const doc = parser.parseFromString(data, 'text/html')
//     eval(doc.querySelector('script').textContent)
// })

// // fetch('/content.html')
// // .then(res=>res.text())
// // .then(data=>{
// //     content.innerHTML=data
// // })

// // fetch('/footer.html')
// // .then(res=>res.text())
// // .then(data=>{
// //     footer.innerHTML=data
// // })

async function addHeader() {
    const header = document.querySelector('#site-header')
    const resp = await fetch("/html/header.html")
    const html = await resp.text();

//     const parser = new DOMParser()
//     const doc = parser.parseFromString(data, 'text/html')
//     eval(doc.querySelector('script').textContent)
    

    header.insertAdjacentHTML("beforeend", html);
}

async function addFooter() {
    const footer = document.querySelector('#site-footer')
    const resp = await fetch("/html/footer.html");
    const html = await resp.text();
    footer.insertAdjacentHTML("beforeend", html);
}



