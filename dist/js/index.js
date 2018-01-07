"use strict";

//Variables

// DOM body and header

var body = document.querySelector("body");
var header = document.querySelector("header");

// The area above the fold of the site

var areaAboveFold = 1200;

// Custom ratios

var full = 1;
var med = 0.6;
var low = 0.3;
var none = 0;

// Set header opacity to 1 for prominent navbar

var navOpacity = function navOpacity() {

    header.style.opacity = full;
};

//  When page scrolls make header transparent, disappear below the fold, and reappear above the fold

body.onscroll = function () {

    if (window.pageYOffset <= areaAboveFold) {

        header.style.opacity = low;
        header.style.display = "flex";
    } else if (window.pageYOffset > areaAboveFold) {

        header.style.display = "none";
    }

    // Set a  delay of x seconds for navbar changes

    setTimeout(navOpacity, 1000);
};