// Handle navigation fade effect
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// Show only the target section
function showSection(targetId) {
  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.classList.remove('hidden');
    } else {
      sec.classList.add('hidden');
    }
  });

  // Always scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Attach click handlers
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // ⬅ important
    const targetId = link.getAttribute('data-target');
    showSection(targetId);
  });
});

// Initial state
showSection('home');
