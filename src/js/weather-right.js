// Drawing and animating circles with random velocity and color

// Report JS file connected

console.log("weather-right.js connected");

// variables

let elementwidth = document.getElementById("canvasPort").clientWidth;
let elementHeight = document.getElementById("canvasPort").clientHeight;

// Set up the canvas and make full screen

const canvasPort = document.getElementById("canvasPort");
canvasPort.width = elementwidth;
canvasPort.height = elementHeight;

// Set 2D context

const ctx = canvasPort.getContext("2d");

// Mouse coordiantes

let mouse = {
    x: undefined,
    y: undefined
};

// Utility Functions

const randomIntFromRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

// Event Listeners

// Capture Mouse movement

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Responsive Canvas

window.addEventListener("resize", () => {
    canvasPort.width = elementwidth;
    canvasPort.height = elementHeight;
    init();
});

// Create Circle function

function Circle(x,y,dx,dy,rad,color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    var minRad = rad;
    var maxRad = (rad * 2);
    this.color = color;
    
    // Draw circle function
    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI *2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
    
    // Update circle position for animation
    this.update = function() {
        
        // Loop circle when it hits the side of the window
        
        if(this.x + this.rad > elementwidth) {
            this.x = 0;
        }
        
        if(this.y + this.rad > elementHeight) {
            this.y = 0;
        }
        
        // Increment position (x,y)
        this.x += this.dx;
        this.y += this.dy;
        
        // Interactivity (mouse and circles)
        // Mouse detection for circle
        if (mouse.x - this.x < 1 && mouse.x - this.x > -1 && mouse.y - this.y < 1 && mouse.y - this.y > -1) {
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
let circles = [];

function init() {
    
    // Reset circles array
    circles = [];
    
    // Randomize circle value (position, velocity, fill and stroke color, and opacity)
    for (let i = 0; i < 100; i++) {
        let rad = randomIntFromRange(2,4);
        let x = Math.random() * (elementwidth - rad * 2) + rad;
        let y = Math.random() * (elementHeight - rad *2) + rad;
        let dx = rad * 0.1;
        let dy = randomIntFromRange(0.5,1);
        let color = "white";
        circles.push(new Circle(x,y,dx,dy,rad,color));
        
    }
}

//  Animation function
const animation = () => {
    //Start loop
    requestAnimationFrame(animation);
    // Clear window after drawing circle
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    // Draw the circles
    for (var i = 0; i < circles.length; i++) {
        circles[i].update();
    }
    
};

// Run 
animation();
init();