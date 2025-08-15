(function() {
  const btn = document.getElementById('mysteryBtn');
  const section = document.getElementById('rickSection');
  const video = document.getElementById('rick-video');
  const closer = document.getElementById('closeRick');
  const yearSpan = document.getElementById('year');
  const confettiTemplate = document.getElementById('confettiPiece');

  yearSpan.textContent = new Date().getFullYear();

  let activated = false;

  function unleashRickRoll() {
    if (activated) return;
    activated = true;

    section.classList.remove('visually-hidden');
    section.setAttribute('aria-hidden', 'false');
    section.classList.add('centered');

    // Play the video
    video.currentTime = 0;
    video.play();

    rainConfetti(140);
    btn.disabled = true;
    btn.textContent = "You've been tastefully welcomed";
    btn.setAttribute('aria-disabled', 'true');
    closer.focus();
  }

  function closeRick() {
    if (!activated) return;
    video.pause();
    video.currentTime = 0;
    section.classList.add('visually-hidden');
    section.setAttribute('aria-hidden', 'true');
    section.classList.remove('centered');
    btn.disabled = false;
    btn.removeAttribute('aria-disabled');
    btn.textContent = 'Do NOT click this button';
    activated = false;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function rainConfetti(count) {
    for (let i = 0; i < count; i++) {
      const clone = confettiTemplate.content.firstElementChild.cloneNode(true);
      const startX = rand(0, window.innerWidth);
      const moveX = rand(-120, 120) + 'px';
      const rot = rand(-720, 720) + 'deg';
      clone.style.left = startX + 'px';
      clone.style.setProperty('--x-move', moveX);
      clone.style.setProperty('--rot', rot);
      const duration = rand(5, 11);
      clone.style.animationDuration = duration + 's';
      clone.style.animationDelay = rand(0, 2) + 's';
      document.body.appendChild(clone);
      setTimeout(() => clone.remove(), (duration + 3) * 1000);
    }
  }

  btn.addEventListener('click', unleashRickRoll);
  closer.addEventListener('click', closeRick);

  let keySequence = [];
  const secret = ['ArrowUp','ArrowDown','ArrowUp','ArrowDown'];
  window.addEventListener('keydown', (e) => {
    keySequence.push(e.key);
    keySequence.splice(-secret.length - 1, keySequence.length - secret.length);
    if (secret.every((v,i)=> keySequence[i] === v)) {
      unleashRickRoll();
      keySequence = [];
    }
  });
})();
