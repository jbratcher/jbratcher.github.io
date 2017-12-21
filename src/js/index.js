var body = document.querySelector("body");
var header = document.querySelector("header")

var navOpacity = function() {
    
    document.querySelector("header").style.opacity = 1;
    
}

body.onscroll = function() {

    document.querySelector("header").style.opacity = 0.3;
        
    setTimeout(navOpacity, 2000);
}