var body = document.querySelector("body");
var header = document.querySelector("header");

var navOpacity = function() {
    
    header.style.opacity = 1;
    
};

body.onscroll = function() {
    
    if (window.pageYOffset <= 1200) {
        
        header.style.opacity = 0.3;
        header.style.display = "flex";
    
    } else if (window.pageYOffset > 1200) {
        
        header.style.display = "none";
        
    }
    
    setTimeout(navOpacity, 2000);

};

