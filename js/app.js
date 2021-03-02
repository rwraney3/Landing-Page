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
            event.preventDefault();
            animate(event.target);
        });
        element.appendChild(link);
        ul.appendChild(element);
    }
}

// setting active class
// //loop over the sections

// function setActive() {
//     let position = section.getboundingclientrect();
//     for (section of sections){
//     section.addEventListener('click', function(event){
//         event.preventDefault();
//         if (position.top < 200 && position.top > -200) {
//             section.class = "my-active-class";
//     } else remove
// }}



//calculate the position of each section using the getboundingclientrect function
//compare that position with a value like 200 and -200
//if the section position is between these values then we need to add a class that represents the active sections like (adding the class your-active-class to the active section)
//if not then we need to remove the class from the section.

//

// scroll to proper location
function animate(element) {
    let rect = document.getElementById(element.getAttribute('data-id')).scrollIntoView({
        behavior: 'smooth'
    });
}
buildNav();
