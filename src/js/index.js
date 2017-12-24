var body = document.querySelector("body");
var header = document.querySelector("header");

var navOpacity = function() {
    
    header.style.opacity = 1;
    
};

body.onscroll = function() {
    
    var y = window.pageYOffset;

    console.log(y);
    
    if (y <= 1200) {
        
        header.style.opacity = 0.3;
        
        setTimeout(navOpacity, 2000);
        
    } else if (y > 1200) {
        header.style.opacity = 0;
    }

};

