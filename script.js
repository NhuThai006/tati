// script.js
function createHeart(){
    const heart = document.createElement ('div');
    const size = Math.random() *50 + 30;
    const duration = Math.random() *5 + 3;

    heart.classList.add('heart');
    heart.style.setProperty('--size', `${size}px`);
    heart.style.setProperty('--animation-duration',`${duration}s`);

    const randomX = Math.random() *window.innerWidth;
    const randomY = Math.random() *window.innerHeight;

    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;

    document.body.appendChild(heart);

    heart.addEventListener ('animationend', () => {
        heart.remove();
    })

}

setInterval(createHeart, 1000);