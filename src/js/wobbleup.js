// Drawing and animating circles with random velocity and color

console.log('js connected');

// Utility Function for random integer

const randomIntFromRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

// Set up the canvas and make full screen

const contactCanvas = document.querySelector("#contact-canvas");
contactCanvas.width = window.innerWidth;
contactCanvas.height = window.innerHeight;

// Set 2D context

const contactCtx = contactCanvas.getContext("2d");

// contactMouse coordiantes

const contactMouse = {
    x: undefined,
    y: undefined
};

// Event Listeners

// Capture Mouse movement

window.addEventListener("mousemove",
    function(event) {
    contactMouse.x = event.x;
    contactMouse.y = event.y;
});

// Responsive Canvas

window.addEventListener("resize", function() {
    contactCanvas.width = window.innerWidth;
    contactCanvas.height = 600;
    init();
});

// Create Circle function

function Circle(x,y,dx,dy,rad,color, boundaryRight, boundaryLeft) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.color = color;
    this.boundaryRight = boundaryRight;
    this.boundaryLeft = boundaryLeft;
    var minRad = rad;
    var maxRad = (rad * 2);

    // Draw circle function

    this.draw = function() {
        contactCtx.beginPath();
        contactCtx.arc(this.x, this.y, this.rad, 0, Math.PI *2);
        contactCtx.fillStyle = this.color;
        contactCtx.fill();
    };

    // Update circle position for animation

    this.update = function() {

        // Move circle to top once it reaches bottom

        if(this.y + this.rad < 0) {
            this.y = window.innerHeight;
        }

        if(this.x > boundaryRight || this.x < boundaryLeft) {
            this.dx = -this.dx;
        }

        // Increment position (x,y)

        this.x += this.dx;
        this.y += this.dy;

        // Interactivity (mouse and circles)

        // Mouse detection for circle

        if (contactMouse.x - this.x < 50 && contactMouse.x - this.x > -50 && contactMouse.y - this.y < 50 && contactMouse.y - this.y > -50) {

            // Limit circle grow size

            if (this.rad < maxRad) {
                this.rad += 1;
            }

        // Limit circle shrink size

        } else if (this.rad > minRad) {
            this.rad -= 1;
        } else if (this.rad < this.minRad) {
            this.rad += 1;
        }

        // Draw Circle

        this.draw();

    };

}

// Create circles array

var contactCircles = [];

function init() {

    // Reset circles array

    contactCircles = [];

    // Randomize circle value (position, velocity, fill and stroke color, and opacity)

    for (let i = 0; i < 100; i++) {
        var rad = randomIntFromRange(2,4);
        var x = Math.random() * (window.innerWidth - rad * 2);  // random x pos +- rad from window edge
        var y = Math.random() * (window.innerHeight - rad * 2); // same but for height instead of width
        var dx = 0.2;
        var dy = -randomIntFromRange(0.2,0.3);
        var color = "#fff";
        var boundaryRight = x + rad;
        var boundaryLeft = x - rad;
        if(this.y < window.innerHeight + rad) {
            this.y = window.innerHeight - rad * 2;
        }
        contactCircles.push(new Circle(x,y,dx,dy,rad,color,boundaryRight,boundaryLeft));
    }

}

//  Animation function

function contactAnimation() {

    //Start loop

    requestAnimationFrame(contactAnimation);

    // Clear window after drawing circle

    contactCtx.clearRect(0,0,window.innerWidth, window.innerHeight);

    // Draw the circles

    for(let i = 0; i < contactCircles.length; i++) {
        contactCircles[i].update();
    }

}

// Run

contactAnimation();
init();
