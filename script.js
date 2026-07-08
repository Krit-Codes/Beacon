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
  const GUIDES = {
    start: {
      eyebrow: 'Guide 01 · Start Here',
      title: 'A 15-minute overview, step by step',
      steps: [
        {
          h: 'Pick the right moment',
          body: [
            'Choose a calm, ordinary evening — not right after a phone gets confiscated or an argument. Sit side by side (couch, car, kitchen island) rather than across a table facing each other; it takes the "interrogation" feel out of it.',
            'Open with the frame, not the warning: "I want to trade what we each know about staying safe online — you teach me some things, I teach you some things."'
          ],
          q: [
            'Is now an okay time, or is there a better time this week?',
            'Would you rather do this over food, in the car, or just here on the couch?'
          ]
        },
        {
          h: 'Name the four risks, together',
          body: [
            'Walk through them plainly, without alarm: seeing content that\u2019s upsetting or not age-appropriate; private info leaking (leading to scams, hacking, stolen identity); cyberbullying; and people online who aren\u2019t who they say they are.',
            'You\u2019re not quizzing — you\u2019re naming the map before you walk it.'
          ],
          q: [
            'Which of these four feels most real to you, based on what you\u2019ve actually seen?',
            'Has anything like this happened to someone you know, even if not to you?'
          ]
        },
        {
          h: 'Let them go first',
          body: [
            'Ask your teen to show you one thing they already do to stay safe — a privacy setting, a block button, a way they screen messages. Let them be the expert for a few minutes.',
            'This does two things: it builds their confidence, and it shows you what they actually know (which is often more than you expect).'
          ],
          q: [
            'Can you show me one thing you already do to keep your account private?',
            'What\u2019s something about [the app they use most] you wish adults understood better?'
          ]
        },
        {
          h: 'Then you go',
          body: [
            'Share one real risk you know about — briefly, specifically, without turning it into a lecture. A short story lands better than a rule.',
            'Keep it to one example. The goal is a trade, not a monologue.'
          ],
          q: [
            'Can I show you one thing I know about, that you might not have run into yet?',
            'Want to hear about a scam I almost fell for, so you know what it looks like?'
          ]
        },
        {
          h: 'Close with the standing offer',
          body: [
            'End every session the same way: "You can always tell me. We\u2019ll figure it out together — losing the phone isn\u2019t the automatic response to bad news."',
            'That one sentence is what makes the next conversation possible.'
          ],
          q: [
            'What would make it easier for you to come to me if something felt wrong online?',
            'Is there anything that\u2019s stopped you from telling me something before?'
          ]
        }
      ]
    },
    glossary: {
      eyebrow: 'Guide 02 · Red Flag Glossary',
      title: 'Working through the glossary together',
      steps: [
        {
          h: 'Read it out loud, together',
          body: [
            'Don\u2019t hand over a printout to read alone — go through the terms together, out loud. It turns a vocabulary list into a conversation.',
            'Terms to cover: grooming, catfishing, phishing, doxxing, sextortion basics (at an age-appropriate level), and "moving to DMs."'
          ],
          q: [
            'Which of these words have you already heard used?',
            'Is there a term your friends use for this stuff that\u2019s different from mine?'
          ]
        },
        {
          h: 'Sort what\u2019s new from what\u2019s known',
          body: [
            'For each term, ask which ones are already familiar versus genuinely new. This tells you where the real gaps are, instead of assuming.'
          ],
          q: [
            'Which of these did you already know? Which one is actually new to you?',
            'Which one surprised you the most?'
          ]
        },
        {
          h: 'Turn each term into a real question',
          body: [
            'Instead of "don\u2019t talk to strangers," ask about the specific pattern: has a conversation ever moved quickly from a game chat to a private one? Has anyone ever asked to keep a chat secret from you?',
            'Specific questions get more honest answers than general warnings.'
          ],
          q: [
            'Has someone ever asked you to move a conversation to DMs or a different app quickly?',
            'Has anyone online ever asked you to keep a conversation secret from me?',
            'Has anyone ever asked you for a photo, your address, or your school name?'
          ]
        },
        {
          h: 'Agree on a signal',
          body: [
            'Set up a low-key code word or phrase your teen can text you if something feels off and they want you to check in or create an exit, without making a scene in front of friends.'
          ],
          q: [
            'If you needed me to check on you without anyone else knowing, what word could you text me?',
            'What would you want me to do if you sent that word — call, show up, or just text back?'
          ]
        },
        {
          h: 'Revisit it every couple of months',
          body: [
            'Apps and slang change fast. Put a loose reminder on the calendar to re-read the glossary together — five minutes, not a big event.'
          ],
          q: [
            'Has anything changed since we last talked about this — new app, new group chat, new person?'
          ]
        }
      ]
    },
    oneonone: {
      eyebrow: 'Guide 03 · The 1-on-1, at Home',
      title: 'Running the session, start to finish',
      steps: [
        {
          h: 'Step 1 — Set the scene',
          body: [
            'Low-pressure environment: kitchen table, car, a walk. Phones can be nearby for reference, not for scrolling.',
            'Say it plainly at the start: "Nothing you tell me tonight gets you in trouble. I want the truth more than I want a perfect answer."'
          ],
          q: [
            'Are you okay talking about this right now, or would another time feel better?'
          ]
        },
        {
          h: 'Step 2 — They\u2019re the expert first',
          body: [
            'Ask them to show or explain something to you — a setting, an app feature, how they handle a pushy stranger in a game lobby. Let them teach.'
          ],
          q: [
            'Can you show me how you\u2019d block or report someone on [app]?',
            'What\u2019s one thing you do automatically now that you didn\u2019t used to think about?'
          ]
        },
        {
          h: 'Step 3 — You trade back',
          body: [
            'Share a real, specific risk or story — a scam pattern, a grooming tactic, an identity-theft close call. Keep it short and concrete.'
          ],
          q: [
            'Want to hear about a red flag that\u2019s easy to miss?'
          ]
        },
        {
          h: 'Step 4 — Warm-up questions',
          body: [
            'Start low-stakes to build comfort before anything sensitive comes up.'
          ],
          q: [
            'What\u2019s your favorite thing to do online right now?',
            'Which of your friends is the most careful online, and what do they do?',
            'What\u2019s something online that made you laugh this week?'
          ]
        },
        {
          h: 'Step 5 — Observation questions',
          body: [
            'Ask about what they\u2019ve seen happen to others first — it\u2019s easier to answer honestly about a friend than about yourself.'
          ],
          q: [
            'Has a stranger ever messaged you first? What did you do?',
            'Have you ever seen someone lie about their age online?',
            'Has a friend of yours ever had something happen online that scared them?'
          ]
        },
        {
          h: 'Step 6 — Feelings & safety-net questions',
          body: [
            'These are the ones that matter most — ask gently, and let silence sit if they need a moment.'
          ],
          q: [
            'Has anything online ever made you feel weird or unsafe, even something small?',
            'Is there anything you\u2019ve seen or been part of that you didn\u2019t know how to bring up with me?',
            'What would make it easier to tell me if something ever felt wrong?',
            'What would you want me to NOT do, if you told me something scary happened?'
          ]
        },
        {
          h: 'Step 7 — Make the no-freakout promise real',
          body: [
            'Agree out loud on what happens if something is disclosed: you stay calm, you problem-solve together, the phone doesn\u2019t disappear as an automatic punishment.'
          ],
          q: [
            'If something did happen, what would help you feel like it\u2019s safe to tell me right away next time?'
          ]
        },
        {
          h: 'Step 8 — Close on the trust meter',
          body: [
            'End by picking one or two habits from the trust meter to check off together this week. Keep the next check-in loose and regular — not a scheduled, formal "session."'
          ],
          q: [
            'Which one habit do you want to try together this week?'
          ]
        }
      ]
    },
    starters: {
      eyebrow: 'Guide 04 · Conversation Starters',
      title: 'A question bank, organized by comfort level',
      steps: [
        {
          h: 'Icebreakers — no judgment, no stakes',
          body: [
            'Use these to open literally any conversation about their online life. The goal is just to get them talking.'
          ],
          q: [
            'What app are you actually into right now?',
            'What\u2019s the funniest thing you saw online today?',
            'If you had to teach me one thing about [game/app], what would it be?'
          ]
        },
        {
          h: 'Curiosity questions — let them teach you',
          body: [
            'Position your teen as the expert. People are more open when they feel respected, not managed.'
          ],
          q: [
            'What do you wish parents actually understood about being online right now?',
            'What\u2019s something you do to stay safe that you think most adults don\u2019t know about?',
            'Is there a rule I have that doesn\u2019t really make sense for how you actually use this stuff?'
          ]
        },
        {
          h: 'Gentle red-flag check-ins',
          body: [
            'Ask about patterns and other people first — it lowers the pressure and often surfaces real experiences naturally.'
          ],
          q: [
            'Has anyone online ever asked you something that felt off?',
            'Do people your age ever talk to strangers who seem a lot older? What happens?',
            'Has anyone ever pushed you to keep a chat secret?'
          ]
        },
        {
          h: 'Feelings & safety-net questions',
          body: [
            'These build the bridge to actually telling the truth when something matters. Ask without a reaction ready to fire.'
          ],
          q: [
            'Has anything online ever made you feel uneasy, even if it wasn\u2019t a big deal?',
            'Is there anything happening online right now you\u2019ve been unsure how to bring up?',
            'What would make it easier to come to me if something felt wrong?'
          ]
        },
        {
          h: 'Wrap-up affirmations',
          body: [
            'End on connection, not correction — this is what makes the next conversation easier than this one.'
          ],
          q: [
            'Thanks for being honest with me tonight — is there anything else on your mind?',
            'What\u2019s one thing we should check in on again in a few weeks?'
          ]
        }
      ]
    }
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

  let currentGuide = null;
  let currentStep = 0;

  function renderStep(){
    const guide = GUIDES[currentGuide];
    const step = guide.steps[currentStep];
    const total = guide.steps.length;

    modalEyebrow.textContent = guide.eyebrow;
    modalTitle.textContent = guide.title;
    modalStepLabel.textContent = 'Step ' + (currentStep + 1) + ' of ' + total;
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

  function openGuide(key){
    currentGuide = key;
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
      openGuide(link.dataset.guide);
    });
  });

  modalClose.addEventListener('click', closeGuide);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeGuide(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeGuide(); });

  modalPrev.addEventListener('click', () => {
    if (currentStep > 0){ currentStep--; renderStep(); }
  });
  modalNext.addEventListener('click', () => {
    const total = GUIDES[currentGuide].steps.length;
    if (currentStep < total - 1){ currentStep++; renderStep(); }
    else { closeGuide(); }
  });
