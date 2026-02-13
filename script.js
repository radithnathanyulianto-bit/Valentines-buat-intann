// Tambah hati jatuh random di background
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  heart.innerHTML = ['❤️','💖','💕','💘','💝'][Math.floor(Math.random()*5)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 800);

// CSS untuk heart-particle (tambahkan di style.css kalau mau)
const style = document.createElement('style');
style.innerHTML = `
  .heart-particle {
    position: fixed;
    top: -10vh;
    pointer-events: none;
    z-index: 1;
    animation: fall linear forwards;
  }
  @keyframes fall {
    to { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
`;
document.head.appendChild(style);
