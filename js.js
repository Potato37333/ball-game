const ball = document.getElementById('ball');
let x = 0;
let y = 0;
let dx = 2; // Initial x-axis velocity
let dy = 2; // Initial y-axis velocity

function animate() {
    x += dx;
    y += dy;

    // Bounce off walls
    if (x + 50 > 400 || x < 0) {
        dx = -dx;
    }

    if (y + 50 > 400 || y < 0) {
        dy = -dy;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    requestAnimationFrame(animate);
}

animate();
