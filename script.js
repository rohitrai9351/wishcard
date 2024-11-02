function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';  // Clear any previous confetti
  
    // Create 150 confetti pieces for a more exciting effect
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = confetti.style.width;
      confettiContainer.appendChild(confetti);
    }
  
    // Remove confetti after 5 seconds
    setTimeout(() => {
      confettiContainer.innerHTML = '';
    }, 5000);
  }
  
  function getRandomColor() {
    const colors = ['#FF69B4', '#FFD700', '#ADFF2F', '#1E90FF', '#FF6347', '#FF4500', '#00FF7F'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  