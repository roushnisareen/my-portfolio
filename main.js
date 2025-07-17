function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Optional: fade-in effect for about/projects on scroll
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.about, .projects');
  reveals.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initial fade styles
document.querySelectorAll('.about, .projects').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease-out';
});
