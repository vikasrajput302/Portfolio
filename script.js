// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scroll({
        top: targetSection.offsetTop - 70, // offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active navbar link based on scroll position
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 75; // offset for fixed header
  document.querySelectorAll('section[id]').forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Contact form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Form validation for email format (simple)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset();
});
