function init() {
    
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    
    const areaAboveFold = 1200;
    
    // Custom ratios for opactiy
    
    const full = 1;
    const med = 0.6;
    const low = 0.3;
    
    // Set header opacity to 1
    
    const fullNavOpacity = () => {
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
        
        setTimeout(fullNavOpacity, 1000);
    
    };
    
}

init();
