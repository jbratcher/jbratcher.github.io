const body = document.querySelector("body");
const header = document.querySelector("header");

let areaAboveFold = 1200;

// Custom ratios for opactiy

let full = 1;
let low = 0.3;

// Set header opacity to 1

let navOpacity = () => {
    header.style.opacity = full;
};

//  When page scrolls, make header transparent, disappear below the fold, and reappear above the fold

body.onscroll = () => {
    
    if (window.pageYOffset <= areaAboveFold) {
        header.style.opacity = low;
        header.style.display = "flex";
    } else if (window.pageYOffset > areaAboveFold) {
        header.style.display = "none";
    }
    
    // Set a  delay of x seconds for navbar changes
    
    setTimeout(navOpacity, 1000);

};

