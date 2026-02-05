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
    console.log('Primary CTA clicked: Book a call');
  });
}
