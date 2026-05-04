// Hamburger menu
const hamburger = document.querySelector('.navbar-hamburger');
const navLinks  = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Email copy to clipboard
const emailBtn = document.querySelector('.email-copy-btn');
if (emailBtn) {
  const tooltip = document.createElement('span');
  tooltip.className = 'email-tooltip';
  tooltip.textContent = 'Email copiado!';
  emailBtn.appendChild(tooltip);

  emailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailBtn.dataset.email).then(() => {
      tooltip.classList.add('visible');
      setTimeout(() => tooltip.classList.remove('visible'), 2000);
    });
  });
}
