const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');

noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the window
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    // Move the button
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function selectYes() {
    question.innerHTML = "Yay! I knew you'd say YES! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('#image-container img').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXFhNHZ6eXFhNHZ6eXFhNHZ6eXFhNHZ6eXFhNHZ6eXFhNHZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/v0ok8JteARfM4/giphy.gif";
}