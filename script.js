const slides = document.querySelectorAll('.slide');
const total = slides.length;
let current = 1;

const pageCount = document.getElementById('pageCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagerJump = document.getElementById('pagerJump');

for (let i = 1; i <= total; i++) {
  const dot = document.createElement('button');
  dot.className = 'jump-dot';
  dot.textContent = i;
  dot.addEventListener('click', () => goTo(i));
  pagerJump.appendChild(dot);
}

function render() {
  slides.forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.slide, 10) === current);
  });
  document.querySelectorAll('.jump-dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx + 1 === current);
  });
  pageCount.textContent = 'Page ' + current + ' of ' + total;
  prevBtn.disabled = current === 1;
  nextBtn.textContent = current === total ? 'Restart ⟲' : 'Next →';
  window.scrollTo(0, 0);
}

function goTo(n) {
  current = Math.max(1, Math.min(total, n));
  render();
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => {
  if (current === total) { goTo(1); }
  else { goTo(current + 1); }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
});

render();
