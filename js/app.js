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

const sections = document.querySelectorAll("section");


// End Global Variables

// Start Helper Functions
    // to get top position of section

// End Helper Functions

// Begin Main Functions

// build the nav

function buildNav() {
    let ul = document.getElementById("navbar__list");
    for (section of sections) { 
        let element = document.createElement("li");
        let link = document.createElement("a");
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
// first, we need to loop over the sections
function selectSection() {
    for (section of sections) {
        let rect = section.getBoundingClientRect();
        let navItem = document.querySelector('#navbar__list li a[data-id='+ section.getAttribute('id')+']')
        //calculate the position of each section using the getboundingclientrect function

        //then we need to compare that position with a value like 200 and -200
        // console.log("top:" + rect.top, "bottom:" + rect.bottom, "window:" +window.scrollY)
        if(rect.top <= 200 && rect.top >= -200){
            //if true - add a class your-active-class to the active section
            section.classList.add("your-active-class");
            navItem.classList.add("active");
        }
            else {
            //if not then we need to remove the class your-active-class from the section
            section.classList.remove("your-active-class");
            navItem.classList.remove('active');
        }
    }
}

// scroll to proper location
function animate(element) {
    let rect = document.getElementById(element.getAttribute('data-id')).scrollIntoView({
        behavior: 'smooth'
    });
}
buildNav();
window.addEventListener('scroll', function(event){
    selectSection();
    
});
