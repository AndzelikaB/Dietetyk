//Tabs element
let tabs = document.querySelectorAll('.tabs__toggle')
let contents = document.querySelectorAll('.tabs__content')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
})

//Accordion element
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});