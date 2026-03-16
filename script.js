// Smooth scrolling for internal anchor links
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const section = document.querySelector(targetId);

    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Small interaction: track primary call-to-action clicks
const primaryButton = document.getElementById('book-call-button');

if (primaryButton) {
  primaryButton.addEventListener('click', () => {
    console.log('Primary CTA clicked: View core features');
  });
}

// Make the right CTA visibly do something and generate timeline tasks
const timelineButton = document.getElementById('timeline-button');
const plannerSection = document.getElementById('planner');
const stageSelect = document.getElementById('timeline-stage');
const generateButton = document.getElementById('planner-generate');
const resultsList = document.getElementById('planner-results');

const taskMap = {
  pre: [
    'Check seed stock and list missing varieties.',
    'Order seeds and confirm delivery dates.',
    'Prepare trays/modules, labels, and compost.',
    'Check fleece/mesh supplies before sowing starts.',
  ],
  sowing: [
    'Sow selected crops and label trays clearly.',
    'Water gently and record sowing date.',
    'Set reminder for germination checks in 3-5 days.',
    'Cover vulnerable trays with fleece/mesh if risk is high.',
  ],
  aftercare: [
    'Thin seedlings and keep moisture consistent.',
    'Ventilate on warmer days to reduce damping off.',
    'Inspect for slug/insect pressure and apply mesh if needed.',
    'Prepare next sowing batch from the timeline.',
  ],
};

function renderTasks(stage) {
  if (!resultsList || !taskMap[stage]) {
    return;
  }

  resultsList.innerHTML = '';

  taskMap[stage].forEach((task) => {
    const item = document.createElement('li');
    item.textContent = task;
    resultsList.appendChild(item);
  });
}

if (timelineButton && plannerSection) {
  timelineButton.addEventListener('click', () => {
    plannerSection.classList.remove('planner-highlight');
    window.setTimeout(() => plannerSection.classList.add('planner-highlight'), 10);
    console.log('Secondary CTA clicked: Try timeline planner');
  });
}

if (generateButton && stageSelect) {
  generateButton.addEventListener('click', () => {
    renderTasks(stageSelect.value);
  });

  renderTasks(stageSelect.value);
}
