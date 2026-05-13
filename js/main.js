const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.15
    });

    fadeElements.forEach((el) => observer.observe(el));

    const music = document.getElementById('bgMusic');
    const musicButton = document.getElementById('musicToggle');

    let isPlaying = false;

    musicButton.addEventListener('click', () => {
      if (!isPlaying) {
        music.play();
        musicButton.innerHTML = '🔊';
        isPlaying = true;
      } else {
        music.pause();
        musicButton.innerHTML = '🎵';
        isPlaying = false;
      }
    });

    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
      particle.style.opacity = Math.random();

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 18000);
    }

    setInterval(createParticle, 240);

    document.querySelectorAll('.btn, .card, .contact-link').forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-4px) scale(1.01)';
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
      });
    });

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 40) {
        navbar.style.background = 'rgba(8, 10, 18, 0.9)';
      } else {
        navbar.style.background = 'rgba(8, 10, 18, 0.72)';
      }
    });