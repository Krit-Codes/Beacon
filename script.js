const items = document.querySelectorAll('.check-item');
  const ringFg = document.getElementById('ringFg');
  const ringPct = document.getElementById('ringPct');
  const CIRC = 389.6;
  let total = 0;

  function update(){
    const offset = CIRC - (CIRC * total / 100);
    ringFg.style.strokeDashoffset = offset;
    ringPct.textContent = total + '%';
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const w = parseInt(item.dataset.w, 10);
      const on = item.classList.toggle('on');
      const box = item.querySelector('.box');
      box.textContent = on ? '✓' : '';
      total += on ? w : -w;
      total = Math.max(0, Math.min(100, total));
      update();
    });
  });

  /* ---------- GUIDE MODAL ---------- */
  const GUIDE = {
    eyebrow: 'Parent Guide',
    title: 'The at-home 1-on-1',
    steps: [
      {
        h: 'Before you start',
        body: [
          'You\u2019ll need to be with the child you hope to have this conversation with. Find a calm moment when you\u2019re not rushed and they\u2019re not distracted \u2014 the couch, the car, dinner, a walk.',
          'Keep it relaxed. This isn\u2019t a test and it\u2019s not a punishment \u2014 it\u2019s just the two of you talking honestly about being online.',
          'Let them know upfront that whatever they tell you, they won\u2019t get in trouble for it. That one sentence is what makes the rest of this actually work.'
        ]
      },
      {
        h: 'Questions to ask',
        body: [
          'Go through these at your own pace. There\u2019s no script to follow exactly \u2014 just talk, listen, and let one question lead into the next.'
        ],
        q: [
          'Do you always feel safe online?',
          'How do you protect yourself online?',
          'Have you ever heard of someone your age get cyberbullied?',
          'What would you do if you got cyberbullied?',
          'Has a stranger ever messaged you out of nowhere? What did you do?',
          'Is there anything online that\u2019s made you feel weird or uncomfortable?',
          'Do you know what to do if someone asks you for personal info or photos?',
          'Is there anything you wish I understood better about being online?',
          'If something ever felt wrong online, would you feel okay telling me about it?'
        ]
      }
    ]
  };

  const modal = document.getElementById('guideModal');
  const modalEyebrow = document.getElementById('modalEyebrow');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalStepLabel = document.getElementById('modalStepLabel');
  const modalProgressFill = document.getElementById('modalProgressFill');
  const modalDots = document.getElementById('modalDots');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');
  const modalClose = document.getElementById('modalClose');

  let currentStep = 0;

  function renderStep(){
    const step = GUIDE.steps[currentStep];
    const total = GUIDE.steps.length;

    modalEyebrow.textContent = GUIDE.eyebrow;
    modalTitle.textContent = GUIDE.title;
    modalStepLabel.textContent = 'Page ' + (currentStep + 1) + ' of ' + total;
    modalProgressFill.style.width = (((currentStep + 1) / total) * 100) + '%';

    let html = '<h4>' + step.h + '</h4>';
    step.body.forEach(p => { html += '<p>' + p + '</p>'; });
    if (step.q && step.q.length){
      html += '<div class="modal-qbox"><div class="qlabel">Questions you could ask</div><ul>';
      step.q.forEach(q => { html += '<li>' + q + '</li>'; });
      html += '</ul><div class="qnote">AI assisted with these questions not all is human.</div></div>';
    }
    modalBody.innerHTML = html;
    modalBody.scrollTop = 0;

    modalDots.innerHTML = '';
    for (let i = 0; i < total; i++){
      const dot = document.createElement('span');
      if (i === currentStep) dot.classList.add('active');
      modalDots.appendChild(dot);
    }

    modalPrev.disabled = currentStep === 0;
    modalNext.textContent = currentStep === total - 1 ? 'Done' : 'Next →';
  }

  function openGuide(){
    currentStep = 0;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    renderStep();
  }

  function closeGuide(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-guide]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openGuide();
    });
  });

  modalClose.addEventListener('click', closeGuide);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeGuide(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeGuide(); });

  modalPrev.addEventListener('click', () => {
    if (currentStep > 0){ currentStep--; renderStep(); }
  });
  modalNext.addEventListener('click', () => {
    if (currentStep < GUIDE.steps.length - 1){ currentStep++; renderStep(); }
    else { closeGuide(); }
  });
