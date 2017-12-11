var body = document.querySelector("body");
var header = document.querySelector("header")

var full = function() {
    
    document.querySelector("header").style.opacity = 1;
    
}

body.onscroll = function() {

    document.querySelector("header").style.opacity = 0.3;
        
    setTimeout(full, 5000);
}