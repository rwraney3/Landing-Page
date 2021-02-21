/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables

let sections = document.querySelectorAll("section");

// build the nav

function buildNav() {
    let ul = document.getElementById("navbar__list");
    for (section of sections) { 
        let element = document.createElement("li");
        let link = document.createElement("a");
        // link.href='#'+section.getAttribute('id');
        link.innerHTML=section.getAttribute("data-nav");
        link.setAttribute('data-id', section.getAttribute("id"));
        link.addEventListener('click', function(event){
            event.stopPropagation();
            animate(event.target);
        });
        element.appendChild(link);
        ul.appendChild(element);
    }
}
// scroll to proper location
function animate(element) {
    var rect = document.getElementById(element.getAttribute('data-id')).scrollIntoView({
        behavior: 'smooth'
    });
}
buildNav();

