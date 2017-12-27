//Variables

// DOM body and header

const body = document.querySelector("body");
const header = document.querySelector("header");

// The area above the fold of the site

let areaAboveFold = 1200;

// Custom ratios

let full = 1;
let med = 0.6;
let low = 0.3;
let none = 0;

// Set header opacity to 1 for prominent navbar

let navOpacity = function() {
    
    header.style.opacity = full;
    
};

//  When page scrolls make header transparent, disappear below the fold, and reappear above the fold

body.onscroll = function() {
    
    if (window.pageYOffset <= areaAboveFold) {
        
        header.style.opacity = low;
        header.style.display = "flex";
    
    } else if (window.pageYOffset > areaAboveFold) {
        
        header.style.display = "none";
        
    }
    
    // Set a  delay of x seconds for navbar changes
    
    setTimeout(navOpacity, 1000);

};

