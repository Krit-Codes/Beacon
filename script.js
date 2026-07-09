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

/* ---------- PROGRESS TRACKER ---------- */
const trackerList = document.getElementById('trackerList');
const trackerReset = document.getElementById('trackerReset');
const ringFg = document.getElementById('ringFg');
const ringPct = document.getElementById('ringPct');
const RING_CIRC = 389.6;

const HABITS = [
  'Reviewed privacy settings together',
  'Talked through a red flag scenario',
  'Reported or blocked something unsafe',
  'Told a trusted adult about something odd',
  'Kept a location or personal detail private',
  'Practiced spotting a fake or bot account',
  'Talked about what to do if a stranger messages first',
  'Checked in about how they\u2019re feeling online',
  'Reviewed who they\u2019ve added or accepted recently',
  'Agreed on a signal word for feeling unsafe'
];

function updateRing() {
  const boxes = document.querySelectorAll('.check-item');
  const checked = document.querySelectorAll('.check-item.checked').length;
  const pct = boxes.length ? Math.round((checked / boxes.length) * 100) : 0;
  ringFg.style.strokeDashoffset = RING_CIRC - (RING_CIRC * pct / 100);
  ringPct.textContent = pct + '%';
}

if (trackerList) {
  HABITS.forEach(label => {
    const item = document.createElement('div');
    item.className = 'check-item';
    item.innerHTML = '<span class="check-box"></span><span class="txt">' + label + '</span>';
    item.addEventListener('click', () => {
      const on = item.classList.toggle('checked');
      item.querySelector('.check-box').textContent = on ? '✓' : '';
      updateRing();
    });
    trackerList.appendChild(item);
  });
}

if (trackerReset) {
  trackerReset.addEventListener('click', () => {
    document.querySelectorAll('.check-item').forEach(item => {
      item.classList.remove('checked');
      item.querySelector('.check-box').textContent = '';
    });
    updateRing();
  });
}


/* ---------- SKIP TO TOOLKIT ---------- */
const skipToolkitBtn = document.getElementById('skipToolkitBtn');
let toolkitPage = null;
slides.forEach(s => {
  const heading = s.querySelector('h2, h1');
  if (heading && heading.textContent.trim() === 'The Toolkit') {
    toolkitPage = parseInt(s.dataset.slide, 10);
  }
});

if (skipToolkitBtn && toolkitPage) {
  skipToolkitBtn.addEventListener('click', () => goTo(toolkitPage));
  const originalRender = render;
  render = function () {
    originalRender();
    skipToolkitBtn.disabled = current === toolkitPage;
  };
  render();
}
