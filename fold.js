 
var allImg = document.querySelectorAll('.slider .image:not(.current)');
var init = anime({
targets: allImg,
scale: 1.4 });

function animation3() {
const VMAX = 3.5
const NB_BUBBLES =   // proportional to about 80 for a 1920×1080 screen
        Math.min(60, window.innerWidth * window.innerHeight / 20_000);  // Min(40) to look nice on code pen front page
const SIZE_MAX = 16;
const SIZE_MIN = 7;
const MAX_SCALE = 6;
const PI = Math.PI;
const INFLUENCE_PROP = 1/4; 



let canvas3 = document.getElementById('bg-canvas1'); 

ctx3 = canvas3.getContext('2d');

let colors = [ '#ffa500', '#663399', '#ffff00', '#00a5ff'];
let bubbles = [];
let running = true;
let mouse = { x: 0, y: 0 }
let w = window.innerWidth;
let h = window.innerHeight;
let influence = Math.max(200, Math.min(w, h) * INFLUENCE_PROP);
canvas3.width = w;
canvas3.height = h;

function rand(mini, maxi) { return Math.random() * (maxi - mini) + mini}
function dist(b1, b2) {
    // On a torus
    return Math.sqrt(Math.min(
        (b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2,
        (Math.abs(b1.x - b2.x) - w) ** 2 + (b1.y - b2.y) ** 2,
        (Math.abs(b1.x - b2.x) - w) ** 2 + (Math.abs(b1.y - b2.y) - h) ** 2,
        (b1.x - b2.x) ** 2 + (Math.abs(b1.y - b2.y) - h) ** 2,
    ))
}
function ease(x) { return 1 - 3*x**2 + 2*x**3; }
function scaledRadius(bubble) { return bubble.radius * (1 + MAX_SCALE*ease(Math.min(1, dist(bubble, mouse) / influence))); }
function adjust(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

function randomBubble() {
    return {
        x: rand(0, w),
        y: rand(0, h),
        vel: rand(0.3, VMAX),
        angle: rand(-PI/3, PI/3),
        vangle: rand(-0.005, 0.005),
        color: colors[Math.floor(rand(0, colors.length))],
        radius: rand(SIZE_MIN, SIZE_MAX),
        fill: Math.round(rand(0, 1)),
        offset: rand(0, 1),
        shape: Math.floor(rand(0, 5)),
        squareAngle: rand(0, PI),
        squareAngleVel: rand(-0.03, 0.03),
    }
}

function drawShape(x, y, r, angle, color, shape, fill) {
    ctx3.strokeStyle = color;
    ctx3.fillStyle = color;
    ctx3.beginPath();
    if (shape === 0) {
        ctx3.arc(x, y, r, 0, Math.PI * 2);
    } else {
        ctx3.moveTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
        for (let i = 0; i < 2 + shape; i++) {
            angle += 2 * PI / (2 + shape);
            ctx3.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle))
        }
    }
    fill ? ctx3.fill() : ctx3.stroke()

}

function draw() {
    ctx3.clearRect(0, 0, w, h);
    bubbles.map(bubble => {
        let r = scaledRadius(bubble);
        drawShape(
            bubble.x - r/2,
            bubble.y + r/2,
            r,
            bubble.squareAngle, bubble.color + '50', bubble.shape, bubble.fill)
    })
    bubbles.map(bubble => {
        let r = scaledRadius(bubble);
        drawShape(
            bubble.x,
            bubble.y,
            r,
            bubble.squareAngle, bubble.color, bubble.shape, bubble.fill)
    })
}

function update(t) {
    bubbles.forEach(bubble => {
        let angle = bubble.angle + Math.sin(t / 3000 + bubble.offset * PI * 2) * PI / 6
        bubble.squareAngle += bubble.squareAngleVel;

        bubble.x += bubble.vel * Math.cos(angle);
        bubble.y += bubble.vel * Math.sin(angle);
        let r = scaledRadius(bubble)
        if (bubble.x < -2*r) bubble.x = w + r;
        if (bubble.x > w+2*r) bubble.x = -r;
        if (bubble.y < -2*r) bubble.y = h + r;
        if (bubble.y > h+2*r) bubble.y = -r;

    })
}

function animationFrame(now) {
    update(now);
    draw();
    if (running) {
        requestAnimationFrame(animationFrame);
    }
}

for (let i = 0; i < NB_BUBBLES; i++) {
    bubbles.push(randomBubble());
}

window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas3.width = w;
    canvas3.height = h;
    influence = Math.min(w, h) * INFLUENCE_PROP;
})
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});
let lastScroll = window.scrollY;
document.addEventListener('scroll', ev => {
    bubbles.forEach(bubble => bubble.y -= window.scrollY - lastScroll)
    lastScroll = window.scrollY;
})

requestAnimationFrame(animationFrame)
}


try {
    animation3();
}  catch (error) {
    console.error(error);
}